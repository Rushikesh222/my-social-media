import axios from "axios";
import { userReducer } from "../Reducer/user-reducer";
import { useAuthContext } from "../Context/Authcontext";
import { toast } from "react-hot-toast";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const { token } = useAuthContext();
  const [userState, userDispatch] = useReducer(userReducer, []);
  const [userLoading, setUserLoading] = useState(false);

  const getUserData = async () => {
    try {
      setUserLoading(true);
      const { data, status } = await axios({
        method: "GET",
        url: "/api/users",
      });
      if (status === 200 || status === 201) {
        userDispatch({ type: "GET_USER", payload: data?.users });
        console.log(data?.users);
        setUserLoading(false);
      }
    } catch (e) {
      toast.error(e.response.data.errors[0]);
    }
  };
  const followerUser = async (userId) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        url: `/api/users/follow/${userId}`,
        headers: { authorization: token },
      });
      if (status === 200 || status === 201) {
        userDispatch({ type: "UPDATE_USERDATA", payload: data?.followUser });
        userDispatch({ type: "UPDATE_USERDATA", payload: data?.user });
      }
    } catch (e) {
      console.error(e);
    }
  };
  const unfollowerUser = async (userId) => {
    try {
      const { data, status } = await axios({
        method: "POST",
        url: `/api/users/unfollow/${userId}`,
        headers: { authorization: token },
      });
      if (status === 200 || status === 201) {
        console.log(data);
        userDispatch({ type: "UPDATE_USERDATA", payload: data?.followUser });
        userDispatch({ type: "UPDATE_USERDATA", payload: data?.user });
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <UserContext.Provider
      value={{ userState, unfollowerUser, followerUser, userLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);

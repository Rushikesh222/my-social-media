import axios from "axios";
import { userReducer } from "../Reducer/user-reducer";
import { AuthContext } from "./Authcontext";
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
  const { token } = useContext(AuthContext);
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
        userDispatch({ type: "UPDATE-USERDATA", payload: data?.followerUser });
        userDispatch({ type: "UPDATE-USERDATA", payload: data?.users });
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
        userDispatch({ type: "UPDATE-USERDATA", payload: data?.followerUser });
        userDispatch({ type: "UPDATE-USERDATA", payload: data?.users });
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

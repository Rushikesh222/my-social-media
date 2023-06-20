import { createContext, useState } from "react";
import { loginService, signupService } from "../service/Authservice";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  const signupHandler = async (username, password, firstname, lastName) => {
    try {
      const response = await signupService(
        username,
        password,
        firstname,
        lastName
      );

      const {
        status,
        data: { createdUser, encodedToken },
      } = response;
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrentUser(createdUser);
        navigate(location?.state?.from?.pathname ?? "/feed", { replace: true });
      }
    } catch (error) {
      console.error(error);
      toast.error("there is error in signing you up");
    }
  };

  const loginHandler = async (username, password) => {
    try {
      const response = await loginService(username, password);
      const {
        status,
        data: { foundUser, encodedToken },
      } = response;
      console.log(foundUser, encodedToken);
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setToken(encodedToken);
        setCurrentUser(foundUser);
        toast.success(`Welcome back, ${foundUser.firstName}!`, {
          icon: "👋",
        });
        navigate(location?.state?.from?.pathname ?? "/feed", { replace: true });
      }
    } catch (error) {
      console.error(error);
      toast.error("User does not exist! Please sign up.");
    }
  };

  return (
    <AuthContext.Provider
      value={{ signupHandler, token, currentUser, loginHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
};

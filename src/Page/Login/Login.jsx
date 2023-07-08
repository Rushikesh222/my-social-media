import "./login.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/Authcontext";

export const Login = () => {
  const { loginHandler, token } = useAuthContext();
  const [userLoginDetails, setUserLoginDetails] = useState({
    username: "",
    password: "",
  });
  const guestUserLoginDetails = {
    username: "Rushikesh",
    password: "Rushikesh123",
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    loginHandler(userLoginDetails);
  };

  return (
    <div className="login-container-body">
      <div className="login-container-form">
        <i className="fab fa-twitter"></i>
        <h1 className="login-title"> Login into twitter</h1>
        <form onSubmit={handleSubmit}>
          <label className="username">
            username
            <input
              className="login-username"
              type="text"
              onChange={(e) =>
                setUserLoginDetails({
                  ...userLoginDetails,
                  username: e.target.value,
                })
              }
            />
          </label>

          <label className="password">
            Password
            <input
              className="login-password"
              type="password"
              onChange={(e) =>
                setUserLoginDetails({
                  ...userLoginDetails,
                  password: e.target.value,
                })
              }
            />
          </label>

          <button type="submit" className="login-button">
            Login
          </button>
          <button
            className="guest-button"
            onClick={(e) => {
              e.preventDefault();
              setUserLoginDetails(guestUserLoginDetails);
              loginHandler(guestUserLoginDetails);
            }}
          >
            Guest Login
          </button>
        </form>
        <a>
          Create your Account?
          <NavLink className="signup-link" to="/signup">
            <a className="Signup-link">Signup</a>
          </NavLink>
        </a>
      </div>
    </div>
  );
};

import "./login.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/Authcontext";
import { logo } from "../../assets/data";

export const Login = () => {
  const { loginHandler, token } = useAuthContext();
  const [userLoginDetails, setUserLoginDetails] = useState({
    username: "",
    password: "",
  });
  const guestUserLoginDetails = {
    username: "adarshbalika",
    password: "adarshBalika123",
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    loginHandler(userLoginDetails);
  };

  return (
    <div className="login-container-body">
      <div className="login-container-form">
        <img src={logo} alt="logo" />
        <form onSubmit={handleSubmit}>
          <label>
            username:
            <input
              className="login-username"
              placeholder="Enter Username"
              type="text"
              onChange={(e) =>
                setUserLoginDetails({
                  ...userLoginDetails,
                  username: e.target.value,
                })
              }
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className="login-password"
              placeholder="Enter Password"
              type="password"
              onChange={(e) =>
                setUserLoginDetails({
                  ...userLoginDetails,
                  password: e.target.value,
                })
              }
            />
          </label>
          <br />
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
          <NavLink to="/signup">
            <a className="Signup-link">Signup</a>
          </NavLink>
        </a>
      </div>
    </div>
  );
};

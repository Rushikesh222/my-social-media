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
    username: "adarshbalika",
    password: "adarshBalika123",
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    loginHandler(userLoginDetails);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input
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
            type="text"
            onChange={(e) =>
              setUserLoginDetails({
                ...userLoginDetails,
                password: e.target.value,
              })
            }
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setUserLoginDetails(guestUserLoginDetails);
            loginHandler(guestUserLoginDetails);
          }}
        >
          Guest Login
        </button>
      </form>

      <NavLink to="/signup">
        <a>Signup</a>
      </NavLink>
    </div>
  );
};

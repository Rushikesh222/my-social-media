import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Authcontext";
import { NavLink, useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loginHandler, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleusername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    loginHandler(username, password);
    console.log(username, password, token);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          username:
          <input type="text" onChange={handleusername} />
        </label>
        <br />
        <label>
          Password:
          <input type="text" onChange={handlePassword} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <button>Guest login</button>
      <NavLink to="/signup">
        <a>Signup</a>
      </NavLink>
    </div>
  );
};

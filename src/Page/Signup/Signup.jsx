import { useState } from "react";
import { useAuthContext } from "../../Context/Authcontext";
import "./Signup.css";
export function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const { signupHandler, token } = useAuthContext();
  const handleusername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleFirstname = (event) => {
    setFirstname(event.target.value);
  };
  const handleLastname = (event) => {
    setLastname(event.target.value);
  };
  const handleCreateAccount = (event) => {
    event.preventDefault();
    signupHandler(username, password, firstname, lastname);
    console.log(username, password, firstname, lastname, token);
  };

  return (
    <div className="signup-details">
      <div className="signup-contianer">
        <img
          className="signup-logo"
          src="https://cdn.pixabay.com/photo/2016/11/01/12/09/twitter-logo-1788039_1280.jpg"
          alt="logo"
        />
        <div className="signup-contianer-form">
          <i className="fab fa-twitter"></i>
          <h1>SignUp</h1>
          <form className="signup-form" onSubmit={handleCreateAccount}>
            <label>
              Username
              <input
                className="sign-username"
                type="text"
                onChange={handleusername}
              />
            </label>
            <br />
            <label>
              Password
              <input
                className="sign-password"
                type="password"
                onChange={handlePassword}
              />
            </label>
            <br />
            <label>
              First Name
              <input
                className="sign-firstname"
                type="text"
                onChange={handleFirstname}
              />
            </label>
            <br />
            <label>
              lastName
              <input
                className="sign-lastname"
                type="text"
                onChange={handleLastname}
              />
            </label>
            <br />
            <button className="signup-button" type="submit">
              create new Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

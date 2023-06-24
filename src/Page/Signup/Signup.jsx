import { useState, useContext } from "react";
import { useAuthContext } from "../../Context/Authcontext";
import "./Signup.css";
import { logo } from "../../assets/data";
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
    <div className="signup-contianer">
      <img className="signup-logo" src={logo} alt="logo" />
      <div className="signup-contianer-form">
        <h1>SignUp</h1>
        <form className="signup-form" onSubmit={handleCreateAccount}>
          <label>
            username:
            <input
              className="sign-username"
              placeholder="Enter UserName"
              type="text"
              onChange={handleusername}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              className="sign-password"
              placeholder="Enter Password"
              type="text"
              onChange={handlePassword}
            />
          </label>
          <br />
          <label>
            First Name:
            <input
              className="sign-firstname"
              placeholder="Enter FirstName"
              type="text"
              onChange={handleFirstname}
            />
          </label>
          <br />
          <label>
            lastName:
            <input
              className="sign-lastname"
              placeholder="Enter LastName"
              type="text"
              onChange={handleLastname}
            />
          </label>
          <br />
          <button className="sign-create-button" type="submit">
            create new Account
          </button>
        </form>
      </div>
    </div>
  );
}

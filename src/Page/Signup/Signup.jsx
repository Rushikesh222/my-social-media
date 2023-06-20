import { useState, useContext } from "react";
import { AuthContext } from "../../Context/Authcontext";

export function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const { signupHandler, token } = useContext(AuthContext);
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
    <div>
      <h1>SignUp</h1>

      <form onSubmit={handleCreateAccount}>
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
        <label>
          First Name:
          <input type="text" onChange={handleFirstname} />
        </label>
        <br />
        <label>
          lastName:
          <input type="text" onChange={handleLastname} />
        </label>
        <br />
        <button type="submit">create new Account</button>
      </form>
    </div>
  );
}

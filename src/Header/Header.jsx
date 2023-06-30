import { NavLink } from "react-router-dom";
import { useAuthContext } from "../Context/Authcontext";
import { logo } from "../assets/data";
import "./Header.css";

export function Header() {
  const { handleUserLogout } = useAuthContext();
  return (
    <div className="header-container">
      <div className="header-container-logo">
        <img className="header-logo" src={logo} alt="logo" />
      </div>

      <div className="header-nav-bar">
        <nav>
          <NavLink onClick={() => handleUserLogout()} to="/">
            <i>LogOut</i>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

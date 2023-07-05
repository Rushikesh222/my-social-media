import { NavLink } from "react-router-dom";
import { useAuthContext } from "../Context/Authcontext";

import "./Header.css";

export function Header() {
  const { handleUserLogout } = useAuthContext();
  return (
    <div className="header-container">
      <div className="header-container-logo">
        <img className="header-logo" src={""} alt="logo" />
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

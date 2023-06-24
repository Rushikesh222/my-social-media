import { NavLink } from "react-router-dom";
import { useAuthContext } from "../Context/Authcontext";
import { logo } from "../assets/data";
import "./Header.css";

export function Header() {
  const { handleUserLogout } = useAuthContext();
  return (
    <div className="header-container">
      <div className="header-conttainer-logo">
        <img className="header-logo" src={logo} alt="logo" />
      </div>

      <div className="header-nav-bar">
        <nav>
          <NavLink to="/feed">
            <i class="far fa-home"></i>
          </NavLink>
          <NavLink to="/explore">
            <i class="far fa-compass"></i>
          </NavLink>
          <NavLink to="/bookmark">
            <i class="far fa-bookmark"></i>
          </NavLink>
          <NavLink onClick={() => handleUserLogout()} to="/">
            <i>LogOut</i>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

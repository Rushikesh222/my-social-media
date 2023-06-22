import { NavLink } from "react-router-dom";
import { useAuthContext } from "../Context/Authcontext";
export function Header() {
  const { handleUserLogout } = useAuthContext();
  return (
    <div className="nav">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/bookmark">BookMark</NavLink>
        <NavLink onClick={() => handleUserLogout()} to="/">
          LogOut
        </NavLink>
      </nav>
    </div>
  );
}

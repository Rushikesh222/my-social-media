import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <div className="nav">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/bookmark">BookMark</NavLink>
        <NavLink to="/logout">LogOut</NavLink>
      </nav>
    </div>
  );
}

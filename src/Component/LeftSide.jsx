import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Context/Authcontext";
import "./Leftside.css";
export const LeftSide = () => {
  const { currentUser, handleUserLogout } = useAuthContext();
  console.log(currentUser?.username);
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <i className="fab fa-twitter"></i>
      <NavLink className="nav-link" to="/feed">
        <div className="sidebarOption active">
          <span class="material-symbols-outlined">home</span>
          <h2>Home</h2>
        </div>
      </NavLink>
      <NavLink className="nav-link" to="/explore">
        <div className="sidebarOption ">
          <span class="material-symbols-outlined">search</span>
          <h2>Explore</h2>
        </div>
      </NavLink>
      <NavLink className="nav-link" to="/bookmark">
        <div className="sidebarOption ">
          <span class="material-symbols-outlined">bookmark</span>
          <h2>Bookmarks</h2>
        </div>
      </NavLink>

      <div
        className="sidebarOption "
        onClick={() => {
          navigate(`/profile/${currentUser?.username}`);
        }}
      >
        <span class="material-symbols-outlined">person</span>
        <h2>Profile</h2>
      </div>
      <NavLink onClick={() => handleUserLogout()} className="nav-link" to="/">
        <div className="sidebarOption ">
          <span class="material-symbols-outlined">logout</span>
          <h2>LogOut</h2>
        </div>
      </NavLink>
      <button class="sidebar_tweet">Tweet</button>
    </div>
  );
};

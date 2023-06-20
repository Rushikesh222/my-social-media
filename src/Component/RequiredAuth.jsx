import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/Authcontext";

export function RequiresAuth({ children }) {
  const { token } = useContext(AuthContext);
  const Location = useLocation();

  return token ? children : <Navigate to="/login" state={{ from: Location }} />;
}

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../Context/Authcontext";

export function RequiresAuth({ children }) {
  const { token } = useAuthContext();
  const Location = useLocation();

  return token ? children : <Navigate to="/login" state={{ from: Location }} />;
}

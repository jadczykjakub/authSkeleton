import useAuthContext from "../hooks/useAuthContext.js";
import { useNavigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  if (!user) {
    navigate("/login");
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

import { useAuth } from "./context/authContext";
import { Navigate } from "react-router-dom";

const ADMIN_EMAIL = "pawantripathi875@gmail.com";

export default function AdminRoute({ children }) {
  const { user } = useAuth();

  if (!user) return <Navigate to="/admin-login" replace />;
  if (user.email !== ADMIN_EMAIL) return <Navigate to="/" replace />;

  return children;
}
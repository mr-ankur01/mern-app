import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
  const token = useSelector((state) => state.auth.token);
  if (!token) return <Navigate to="auth/login" />;
  return <Outlet />;
}

import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/AuthContext";
const ProtectedRoute = ({ requiredRole, children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-200">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-logo-gold"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }
  const userRole = user.role?.toLowerCase();
  const targetRole = requiredRole?.toLowerCase();

  if (requiredRole && userRole !== targetRole) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;

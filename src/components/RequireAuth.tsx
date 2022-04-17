import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../firebase/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Fragment, ReactNode } from "react";

const RequireAuth = ({ children }: { children: ReactNode }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (!user && !loading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Fragment>{children}</Fragment>;
};

export default RequireAuth;

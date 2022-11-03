import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContexts";

const PrivateRouter = ({ children }) => {
    const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return ( 
        <h1>Loading...</h1>
    );
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate to={"/login" } state={{ from: location }} replace></Navigate>;
};

export default PrivateRouter;

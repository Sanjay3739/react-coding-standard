import React, { useEffect, useState } from "react";
import Loader from "../../layout/loader/Loader";
import { Navigate } from "react-router-dom";

export const ProtectedRoute: React.FC<{ element: React.ReactNode }> = ({ element }) => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);
  
    useEffect(() => {
      // Check authentication status here (e.g., from local storage or API)
      const isAuthenticated = !!localStorage.getItem("application_data");
      setAuthenticated(isAuthenticated);
      setLoading(false);
    }, []);
  
    if (loading) {
      return <Loader />;
    }
  
    if (!authenticated) {
      return <Navigate to="/" replace />;
    }
  
    return <>{element}</>;
  };
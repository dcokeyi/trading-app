import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contexts";

interface ProtectedRouteProps {
    children: ReactNode;
  }

export const ProtectedRoute = ({children}: ProtectedRouteProps) => {
    const {authState} = useAuthContext();
    const {user} = authState;

    if (!user) {
        return <Navigate to="/signin" />
    }

    return (
        <>{children}</>
    );
}
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
        loginWithRedirect()
    }

    return <>{children}</>;
};

export default PrivateRoute; 
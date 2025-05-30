import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    if (!isAuthenticated) {
        loginWithRedirect()
        return <div></div>;
    }

    return <>{children}</>;
};

export default PrivateRoute; 
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import config from "../../config/Config";

const AuthCallback: React.FC = () => {
    const { isAuthenticated, getAccessTokenSilently, user, isLoading } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        const handleCallback = async () => {
            if (isAuthenticated) {
                try {
                    // Request access token for your API
                    const token = await getAccessTokenSilently({
                        authorizationParams: {
                            audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                            scope: "openid profile email"
                        }
                    });

                    // Make your backend request here
                    const result = await fetch(`${config.api.baseUrl}/dermgpt/api/user-configs/create/`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            user_id: user?.sub,
                            user_name: user?.name,
                            email: user?.email,
                        }),
                    });
                    console.log(result);
                    // Redirect to chat
                    navigate("/derm-gpt-chat");
                } catch (error) {
                    console.error("Error getting access token:", error);
                    // Handle error appropriately
                }
            }
        };
        if (!isLoading) {
            handleCallback();
        }
    }, [isAuthenticated, isLoading, getAccessTokenSilently, user, navigate]);

    return <div></div>;
};

export default AuthCallback;

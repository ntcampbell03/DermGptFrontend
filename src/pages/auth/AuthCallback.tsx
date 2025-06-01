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

                    // First, check if user config already exists
                    try {
                        const checkResult = await fetch(`${config.api.baseUrl}/api/user-configs/me/`, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            },
                        });

                        if (checkResult.ok) {
                            // User config exists, redirect to chat
                            navigate("/derm-gpt-chat");
                            return;
                        } else if (checkResult.status === 404) {
                            // User config doesn't exist, this is a first-time user
                            navigate("/first-time-survey");
                            return;
                        }
                    } catch (error) {
                        console.error("Error checking user config:", error);
                        // Continue to create config as fallback
                    }

                    // Fallback: Create user config if check failed
                    const result = await fetch(`${config.api.baseUrl}/api/user-configs/create/`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            user_name: user?.name,
                            email: user?.email,
                        }),
                    });
                    console.log(result);
                    // Redirect to first-time survey for newly created users
                    navigate("/first-time-survey");
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

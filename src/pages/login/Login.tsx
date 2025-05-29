import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";

const Login: React.FC = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/derm-gpt-chat");
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="Login">
            <button onClick={() => loginWithRedirect()} className="login-button">
                Log in with Auth0
            </button>
        </div>
    );
};

export default Login; 
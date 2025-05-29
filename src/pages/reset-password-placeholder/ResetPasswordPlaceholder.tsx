import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { resetPasswordPlaceholder } from "../../api/Api";
import { useAuth } from "../../auth/AuthContext";
import "./ResetPasswordPlaceholder.css";

const ResetPasswordPlaceholder: React.FC = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    // Get email from URL query parameter
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");

    if (!email) {
        navigate("/login");
        return null;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const { data, status } = await resetPasswordPlaceholder(
                email,
                newPassword
            );
            if (status === 200) {
                login(data.access_token);
                navigate("/derm-gpt-chat");
            } else {
                setError(data.error || "Failed to reset password");
            }
        } catch (error) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div className="ResetPasswordPlaceholder">
            <form onSubmit={handleSubmit}>
                <h2>Password Reset Required</h2>
                <div className="message">
                    <p>
                        We're changing our security systems to better protect your data.
                    </p>
                    <p>
                        As part of this process, we need you to set a new password for your
                        account.
                    </p>
                    <p>
                        This is a one-time requirement to ensure your account's security.
                    </p>
                </div>
                <div className="email-info">
                    <p>
                        Account: <strong>{email}</strong>
                    </p>
                </div>
                <div>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        placeholder="New Password"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Confirm Password"
                    />
                </div>
                {error && <div className="error">{error}</div>}
                <button type="submit">Set New Password</button>
            </form>
        </div>
    );
};

export default ResetPasswordPlaceholder; 
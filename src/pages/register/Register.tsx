import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/Api";
import "./Register.css";

const Register: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const { data, statusCode } = await registerUser(
                firstName,
                lastName,
                email,
                password
            );
            if (statusCode === 201) {
                localStorage.setItem("token", data.token);
                navigate("/derm-gpt-chat");
            } else {
                setError(data.error);
            }
        } catch (error) {
            setError("An error occurred during registration. Please try again.");
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="name-fields">
                        <div className="form-group-half">
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                                placeholder="First Name"
                            />
                        </div>
                        <div className="form-group-half">
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                required
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Email"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        placeholder="Confirm Password"
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit" className="register-button">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register; 
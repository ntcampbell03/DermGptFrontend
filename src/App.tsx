import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import DermGpt from "./pages/dermgpt/DermGpt";
import ResetPasswordPlaceholder from "./pages/reset-password-placeholder/ResetPasswordPlaceholder";
import AuthCallback from "./pages/auth/AuthCallback";
import logo from "./assets/dermgpt.svg";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import PrivateRoute from "./auth/PrivateRoute";

const App: React.FC = () => {
    const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <nav className="App-nav-left">
                        <Link to="/" className="App-link">
                            Home
                        </Link>
                    </nav>
                    <Link to="/" className="App-logo-link">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>
                    <nav className="App-nav-right">
                        {isAuthenticated ? (
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className="logout-button">
                                Logout
                            </button>
                        ) : (
                            <button onClick={loginWithRedirect} className="App-link">
                                Login
                            </button>
                        )}
                    </nav>
                </header>
                <main className="App-main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/reset-password-placeholder" element={<ResetPasswordPlaceholder />} />
                        <Route path="/auth-callback" element={<AuthCallback />} />
                        <Route
                            path="/derm-gpt-chat"
                            element={
                                <PrivateRoute>
                                    <DermGpt />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App; 
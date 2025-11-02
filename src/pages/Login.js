import React from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/home");
  };

  return (
    <div className="main-container">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Click to Login</button>
    </div>
  );
};

export default Login;

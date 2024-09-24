import React from 'react';
import { Link } from 'react-router-dom';
import './loginButton.css'; // Ensure this CSS file is already created

const LoginButton = () => {
  return (
    <Link to="/login">
      <button className="login-button">
        Login
      </button>
    </Link>
  );
};

export default LoginButton;

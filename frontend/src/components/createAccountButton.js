import React from 'react';
import { Link } from 'react-router-dom';
import './createAccountButton.css';

const CreateAccountButton = () => {
  return (
    <Link to="/createAccount">
      <button className="create-account-button">
        CREATE ACCOUNT
      </button>
    </Link>
  );
};

export default CreateAccountButton;

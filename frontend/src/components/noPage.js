// NoPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './noPage.css'; // Optional: for custom styles

function NoPage() {
  return (
    <div className="nopage">
      <h1 className="nopage-title">404</h1>
      <p className="nopage-message">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="nopage-link">Go to Home Page</Link>
    </div>
  );
}

export default NoPage;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/badge.png'; 
import './navigation.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Innerman logo" className="logo" />
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/admissions">Fees Structure</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="/applications">Applications</Link>
          </li> */}
          <li className="nav-item">
            <Link to="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

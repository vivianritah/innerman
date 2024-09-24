import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="address">
            <h3>ADDRESS</h3>
            <p>
              Plot 1077, Kasuubi, Kampala<br />
              (500 m after Quality Shopping Village)<br />
              P.O. Box 24686 Kampala Uganda<br />
              <strong>Tel:</strong> +256 780 805954<br />
              <strong>Email:</strong> <a href="mailto:innermanprimaryschool@gmail.com">innermanprimaryschool@gmail.com</a><br />
            </p>
          </div>
          <div className="quick-links">
            <h3>QUICK LINKS</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/applications">Apply Online</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>All rights reserved © 2024. Innerman Pre & Primary School.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

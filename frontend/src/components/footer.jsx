import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">TodoApp</h2>

        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/letsdo">Lets do</Link></li>
        </ul>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} TodoApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

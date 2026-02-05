import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaRegCircleUser } from "react-icons/fa6";
import { SiTodoist } from "react-icons/si";
import {useSelector} from "react-redux";
const Navbar = () => {
  const isLoggedIn =useSelector((state)=>state.isLoggedIn);
  console.log(isLoggedIn);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar">
      <div className="logo">Todo  <SiTodoist /></div>
      <ul className={isMobileMenuOpen ? "nav-links-mobile" : "nav-links"} onClick={() => setMobileMenuOpen(false)}>
        <Link to="/" className="nav-item"><li>Home</li></Link>
        <Link to="/aboutus" className="nav-item"><li>About Us</li></Link>
        <Link to="/letsdo" className="nav-item"><li>Let's do</li></Link>
        {!isLoggedIn &&  <><Link to="/login" className="nav-item"><li>Login</li></Link>
        <Link to="/register" className="nav-item"><li>Register</li></Link> </>}
        
        <Link to="/profile" className="nav-item" ><li><FaRegCircleUser /></li></Link>
          
      </ul>
      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? "✖" : "☰"}
      </div>
    </nav>
  );
};

export default Navbar;

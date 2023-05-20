import React, { useRef } from "react";
import navLogo from "../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("nav-show");
  };
  return (
    <header>
      <img src={navLogo} alt="Logo" className="nav-logo" />
      <nav ref={navRef}>
        <Link to="/" className="nav-link" onClick={showNavbar}>
          Home
        </Link>
        <Link to="/menu" className="nav-link" onClick={showNavbar}>
          Menu
        </Link>
        <Link to="/about" className="nav-link" onClick={showNavbar}>
          About
        </Link>
        <Link to="/reservation" className="nav-link" onClick={showNavbar}>
          Reservation
        </Link>
        <Link to="/order" className="nav-link" onClick={showNavbar}>
          Order Online
        </Link>
        <Link to="/login">
          <button className="login-button" onClick={showNavbar}>Log In</button>
        </Link>
        <div className="nav-ctrl-btn nav-close" onClick={showNavbar}>
          <FaTimes />
        </div>
      </nav>
      <div className="nav-ctrl-btn" onClick={showNavbar}>
        <FaBars />
      </div>
    </header>
  );
}

export default Navbar;

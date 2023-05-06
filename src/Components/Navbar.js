import React, { useRef } from "react";
import navLogo from "../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("nav-show");
  };
  return (
    <header>
      <img src={navLogo} alt="Logo" className="nav-logo" />
      <nav ref={navRef}>
        <a href="/#" className="nav-link">
          Home
        </a>
        <a href="/#" className="nav-link">
          Menu
        </a>
        <a href="/#" className="nav-link">
          About
        </a>
        <a href="/#" className="nav-link">
          Reservation
        </a>
        <a href="/#" className="nav-link">
          Order Online
        </a>
        <button className="login-button">Log In</button>

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

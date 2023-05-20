import React from "react";
import { Icon } from "@iconify/react";
import footerLogo from "../assets/footerlogo.png";
import {Link} from "react-router-dom"
function Footer() {
  return (
    <footer>
      <div className="footer-section1">
        <img src={footerLogo} alt="footer logo" />
      </div>
      <div className="footer-section2">
        <h4>Navigation</h4>
        <nav className="footer-nav">
          <Link to="/" className="footer-nav-link">
            Home
          </Link>
          <Link to="/about" className="footer-nav-link">
            About
          </Link>
          <Link to="/menu" className="footer-nav-link">
            Menu
          </Link>
          <Link to="/reservation" className="footer-nav-link">
            Reservation
          </Link>
          <Link to="/order" className="footer-nav-link">
            Order Online
          </Link>
          <Link to="/login" className="footer-nav-link">
            Login
          </Link>
        </nav>
      </div>
      <div className="footer-section3">
        <h4>Contact</h4>
        <div className="footer-contact">
          <p>15 ABC St. , Holly Cow Avenue</p>
          <p>(515) 254-4544</p>
          <p>biglemon@littlelemon.com</p>
        </div>
      </div>
      <div className="footer-section4">
        <h4>Social Media</h4>
        <div className="footer-socialmedia-icons">
          <div>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              data-testid="footer-test-social"
            >
              <Icon icon="ic:baseline-facebook" />
            </a>
            <a
              href="https://www.tripadvisor.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="fa-brands:tripadvisor" />
            </a>
          </div>
          <div>
            {" "}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon="mdi:instagram" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <Icon icon="mdi:youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

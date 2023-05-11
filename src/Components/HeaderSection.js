import React from "react";
import HeroImage from "../assets/hero.jpg";
import { Link } from "react-router-dom";
function HeaderSection() {
  return (
    <section class="hero-section">
      <div class="hero-1">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/reservation">
          <button>Reserve a Table</button>
        </Link>
      </div>
      <div class="hero-2">
        <img src={HeroImage} alt="restaurant chef" />
      </div>
    </section>
  );
}

export default HeaderSection;

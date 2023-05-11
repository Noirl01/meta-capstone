import React from "react";
import chefsImage from '../assets/chefs.png'
import chefImage from '../assets/chef.png'
import rstImage from '../assets/restaurant.png'

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-section--section1">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant that serves
          traditional recipes with a modern twist. Using fresh ingredients,
          their flavorful dishes, such as succulent kebabs and crisp salads, are
          cooked to perfection. Little Lemon provides a welcoming atmosphere for
          dining with friends and family.
        </p>
      </div>
      <div className="about-section--section2">
        <img src={chefsImage} alt="chefs" />
        <img src={chefImage} alt="chef" />
        <img src={rstImage} alt="restaurant" />
      </div>
    </div>
  );
}

export default AboutSection;

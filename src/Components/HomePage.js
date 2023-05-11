import React from "react";
import HeaderSection from "./HeaderSection";
import OrderSection from "./OrderSection";
import TestimonialSection from "./TestimonialSection";
import AboutSection from "./AboutSection";

function HomePage() {
  return (
    <main>
      <HeaderSection />
      <OrderSection />
      <TestimonialSection numOfCards={3} />
      <AboutSection />
    </main>
  );
}

export default HomePage;

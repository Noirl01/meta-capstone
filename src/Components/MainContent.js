import React from "react";
import HeaderSection from "./HeaderSection";
import OrderSection from "./OrderSection"
import TestimonialSection from "./TestimonialSection"

function LandingContent() {
  return (
    <main>
      <HeaderSection />
      <OrderSection />
      <TestimonialSection numOfCards={3} />
    </main>
  );
}

export default LandingContent;

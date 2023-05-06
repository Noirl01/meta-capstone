import React from "react";
import TestimonialCard from "./TestimonialCard";

function TestimonialSection() {
  return (
    <section className="testimonal-section">
      <h3>Testimonials</h3>
      <TestimonialCard numOfCards={3}/>
    </section>
  );
}

export default TestimonialSection;

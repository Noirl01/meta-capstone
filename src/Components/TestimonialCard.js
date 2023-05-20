import React from "react";
import testimonialImgA from "../assets/testimonial1.jpg";
import testimonialImgB from "../assets/testimonial2.jpg";
import testimonialImgC from "../assets/testimonial3.jpg";
import yellowStar from "../assets/yellowstar.svg";
import greyStar from "../assets/graystar.svg";

const data = [
  {
    name: "Maria San Paolo",
    rating: 5,
    comment: "Outstanding seating with great helpful staff.",
    image: testimonialImgA,
  },
  {
    name: "John Travis",
    rating: 5,
    comment: "The chef is phenomenal. Bruchettas are beyond perfect.",
    image: testimonialImgB,
  },
  {
    name: "Scott Pilgrim",
    rating: 4,
    comment: "Great experience all over the place, Only the dessert was fine.",
    image: testimonialImgC,
  }
];
function TestimonialCard({ numOfCards }) {
  const starsGenerator = (rating) => {
    let stars = rating;
    let ratingStars = [];
    for (let i = 0; i < 5; i++) {
      if (stars > 0) {
        ratingStars.push(
          <img src={yellowStar} alt="Yellow Star" className="yellow-star" key={rating * Math.random()}/>
        );
        stars--;
      } else {
        ratingStars.push(
          <img src={greyStar} alt="Grey Star" className="grey-star" key={rating * Math.random()}/>
        );
      }
    }
    return ratingStars;
  };
  return (
    <div className="testimonial-cards">
      {data.slice(0, numOfCards).map((item) => (
        <div className="testimonial-card" key={item.name} data-testid="testimonial-card">
          <div className="testimonial-rating--section1">
            <h4 className="testimonial-title">Rating</h4>
            <div className="testimonial-stars">
              {starsGenerator(item.rating)}
            </div>
          </div>
          <div className="testimonial-rating--section2">
            <img
              src={item.image}
              alt="testimonial rating"
              className="testimonial-img"
            />
            <div className="testimonial-comment">
              <h3 className="testimonial-name">{item.name}</h3>
              <q className="">{item.comment}</q>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestimonialCard;

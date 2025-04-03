// src/components/Review/Review.jsx
import React from "react";
import ReviewHeading from "./ReviewHeading";
import ReviewList from "./ReviewList";
import "./Review.css";

const Review = () => {
  return (
    <section id="review" className="my-5">
      <div className="review-container container w-75">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <ReviewHeading />
        </div>
        <ReviewList />
      </div>
    </section>
  );
};

export default Review;

// src/components/InfoCards/InfoCards.jsx
import React from "react";
import Counter from "./Counter";
import "./InfoCards.css";

const cardData = [
  { to: 325, label: "Course" },
  { to: 405, label: "Work Out" },
  { to: 305, label: "Working Hour" },
  { to: 705, label: "Happy Client" },
];

const InfoCards = () => {
  return (
    <div id="info-cards">
      <div className="container w-75 d-flex flex-column flex-md-row align-items-center justify-content-evenly">
        {cardData.map((item, index) => (
          <div key={index} className="info-card">
            <Counter to={item.to} />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;

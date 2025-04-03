// src/components/Trainers/Trainers.jsx
import React from "react";
import TrainersHeading from "./TrainersHeading";
import TrainerList from "./TrainerList";
import "./Trainers.css";

const Trainers = () => {
  return (
    <section id="trainers" className="my-5">
      <div className="container w-75">
        <div className="d-flex flex-column justify-content-center align-items-center py-5">
          <TrainersHeading />
          <TrainerList />
        </div>
      </div>
    </section>
  );
};

export default Trainers;

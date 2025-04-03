// src/components/BMI/BMI.jsx
import React, { useState } from "react";
import BMIForm from "./BMIForm";
import BMIIndicator from "./BMIIndicator";
import "./BMI.css";

const BMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [category, setCategory] = useState(null);

  return (
    <section id="bmi" className="my-5">
      <div className="container w-75">
        <div className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-6">
            <BMIForm
              height={height}
              weight={weight}
              setHeight={setHeight}
              setWeight={setWeight}
              setCategory={setCategory}
            />
          </div>
          <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
            <BMIIndicator category={category} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BMI;

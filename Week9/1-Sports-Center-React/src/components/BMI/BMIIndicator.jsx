// src/components/BMI/BMIIndicator.jsx
import BMICategory from "./BMICategory";
import bmiImage from "../../assets/bmi-index.jpg";

const BMIIndicator = ({ category }) => {
  return (
    <>
      <h2>Your BMI</h2>
      <img src={bmiImage} alt="BMI Index" className="w-100" />
      <div className="d-flex flex-row w-100 justify-content-evenly mt-2">
        <BMICategory name="underweight" active={category === "underweight"} />
        <BMICategory name="normal" active={category === "normal"} />
        <BMICategory name="overweight" active={category === "overweight"} />
        <BMICategory name="obese" active={category === "obese"} />
        <BMICategory
          name="extreme-obese"
          active={category === "extreme-obese"}
        />
      </div>
    </>
  );
};

export default BMIIndicator;

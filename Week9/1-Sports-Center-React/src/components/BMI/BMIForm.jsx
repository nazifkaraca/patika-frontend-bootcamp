// src/components/BMI/BMIForm.jsx
const BMIForm = ({ height, weight, setHeight, setWeight, setCategory }) => {
  const handleInput = (e, setter) => {
    setter(e.target.value);
    calculateBMI(e.target.value, setter === setHeight ? weight : height);
  };

  const calculateBMI = (h, w) => {
    const cm = parseFloat(h);
    const kg = parseFloat(w);

    if (!cm || !kg || isNaN(cm) || isNaN(kg)) return;

    const m = cm / 100;
    const bmi = kg / (m * m);

    if (bmi < 18.5) setCategory("underweight");
    else if (bmi < 24.9) setCategory("normal");
    else if (bmi < 29.9) setCategory("overweight");
    else if (bmi < 34.9) setCategory("obese");
    else setCategory("extreme-obese");
  };

  return (
    <>
      <h2>BMI Calculator</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <p>Enter your height and weight to calculate your BMI.</p>
      <div className="mx-2">
        <input
          type="number"
          value={height}
          onChange={(e) => handleInput(e, setHeight)}
          placeholder="Your Height"
          className="me-1"
        />
        <span className="me-2">cm</span>
        <input
          type="number"
          value={weight}
          onChange={(e) => handleInput(e, setWeight)}
          placeholder="Your Weight"
          className="me-1"
        />
        <span>kg</span>
      </div>
    </>
  );
};

export default BMIForm;

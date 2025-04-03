import React from "react";

const Dice = ({ value }) => {
  return (
    <div className="dice">
      <img src={`/dice${value}.png`} alt={`Dice ${value}`} />
    </div>
  );
};

export default Dice;

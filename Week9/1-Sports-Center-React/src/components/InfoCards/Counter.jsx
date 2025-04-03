// src/components/InfoCards/Counter.jsx
import React, { useEffect, useState } from "react";

const Counter = ({ to }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = to / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= to) {
        start = to;
        clearInterval(counter);
      }
      setValue(Math.floor(start));
    }, 10);
  }, [to]);

  return <span className="counter fs-2">{value}</span>;
};

export default Counter;

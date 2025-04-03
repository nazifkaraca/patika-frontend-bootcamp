// src/components/Classes/ClassImage.jsx
import React from "react";

const ClassImage = ({ src }) => {
  return <img src={`../src/assets/${src}`} alt={src} className="w-100" />;
};

export default ClassImage;

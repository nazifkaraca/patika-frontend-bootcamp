// src/components/BMI/BMICategory.jsx
const BMICategory = ({ name, active }) => {
  return (
    <div id={name} className={active ? "triangle-up" : ""}>
      {/* İsteğe göre label eklenebilir */}
    </div>
  );
};

export default BMICategory;

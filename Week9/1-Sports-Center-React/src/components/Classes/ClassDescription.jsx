// src/components/Classes/ClassDescription.jsx
const ClassDescription = ({ title, description, schedule }) => {
  return (
    <>
      <h2>{title}</h2>
      <p className="justify-text">{description}</p>
      <h2 className="mt-5">Schedule</h2>
      {schedule.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </>
  );
};

export default ClassDescription;

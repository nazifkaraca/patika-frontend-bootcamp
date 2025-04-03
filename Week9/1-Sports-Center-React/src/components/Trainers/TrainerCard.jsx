const TrainerCard = ({ name, role, image }) => {
  return (
    <div className="trainer-wrapper">
      <div className="side-box">
        <img src={image} alt={name} className="trainer-img" />
        <div className="trainer-info text-center mt-2">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;

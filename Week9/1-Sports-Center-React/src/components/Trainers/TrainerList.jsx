import TrainerCard from "./TrainerCard";
import trainer1 from "../../assets/trainer1.jpg";
import trainer2 from "../../assets/trainer2.jpg";
import trainer3 from "../../assets/trainer3.jpg";

const trainers = [
  { name: "Jane Doe", role: "Cardio Trainer", image: trainer1 },
  { name: "John Smith", role: "Strength Coach", image: trainer2 },
  { name: "Emily Rose", role: "Yoga Instructor", image: trainer3 },
];

const TrainerList = () => {
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 w-100">
      {trainers.map((trainer, index) => (
        <TrainerCard key={index} {...trainer} />
      ))}
    </div>
  );
};

export default TrainerList;

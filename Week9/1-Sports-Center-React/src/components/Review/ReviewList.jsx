import ReviewCard from "./ReviewCard";
import client1 from "../../assets/client1.jpg";
import client2 from "../../assets/client2.jpg";

const reviewers = [
  {
    name: "Diet Expert",
    title: "CFO",
    image: client1,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nam quaerat...",
  },
  {
    name: "Cardio Trainer",
    title: "CEO",
    image: client2,
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, numquam, officiis...",
  },
];

const ReviewList = () => {
  return (
    <div className="row d-flex justify-content-around">
      {reviewers.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  );
};

export default ReviewList;

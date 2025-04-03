const ReviewCard = ({ name, title, image, comment }) => {
  return (
    <div className="col-12 col-md-5 d-flex flex-column mt-4">
      <div className="d-flex flex-row">
        <img className="client-img" src={image} alt={name} />
        <div className="d-flex flex-column ps-3">
          <h5>{name}</h5>
          <p>{title}</p>
        </div>
      </div>
      <div>
        <p className="review-comment">{comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;

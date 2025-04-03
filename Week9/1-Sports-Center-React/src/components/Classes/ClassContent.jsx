// src/components/Classes/ClassContent.jsx
import ClassDescription from "./ClassDescription";
import ClassImage from "./ClassImage";

const ClassContent = ({ data }) => {
  return (
    <div className="row mt-4 d-flex flex-column flex-md-row">
      <div className="col-12 col-md-6 p-0">
        <ClassDescription
          title={data.title}
          description={data.description}
          schedule={data.schedule}
        />
      </div>
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-center p-5">
        <ClassImage src={data.image} />
      </div>
    </div>
  );
};

export default ClassContent;

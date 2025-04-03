// src/components/Classes/ClassTabs.jsx
const tabs = ["yoga", "group", "solo", "stretching"];

const formatLabel = (key) => key.charAt(0).toUpperCase() + key.slice(1);

const ClassTabs = ({ selected, onSelect }) => {
  return (
    <div
      id="individual-classes"
      className="d-flex flex-row justify-content-evenly col-12 flex-wrap my-3 gap-4"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button navy-color text-white btn btn-lg px-4 py-1 fw-bolder ${
            selected === tab ? "active" : ""
          }`}
          onClick={() => onSelect(tab)}
        >
          {formatLabel(tab)}
        </button>
      ))}
    </div>
  );
};

export default ClassTabs;

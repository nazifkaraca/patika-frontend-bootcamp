import React from "react";

const UsernameInput = ({ name, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
};

export default UsernameInput;

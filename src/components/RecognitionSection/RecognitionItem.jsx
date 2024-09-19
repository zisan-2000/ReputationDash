import React from "react";

const RecognitionItem = ({ icon, label }) => {
  return (
    <div className="recognition-item">
      {/* Render the passed icon */}
      {icon}
      {/* Render the label */}
      <span className="recognition-item-label">{label}</span>
    </div>
  );
};

export default RecognitionItem;

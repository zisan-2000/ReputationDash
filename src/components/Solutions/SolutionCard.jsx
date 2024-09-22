import React from "react";

const SolutionCard = ({ icon, title, description, backgroundColor }) => {
  return (
    <div className={`solution-card  ${backgroundColor}`}>
      {/* Solution Icon */}
      <div className="solution-icon ">{icon}</div>
      {/* Solution Title */}
      <h3 className="solution-title ">{title}</h3>
      {/* Solution Description */}
      <p className="solution-description ">{description}</p>
    </div>
  );
};

export default SolutionCard;

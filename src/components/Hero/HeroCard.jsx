import React from "react";
import { FaUser, FaUsers } from "react-icons/fa";

// Icons map for dynamic rendering
const icons = {
  FaUser: <FaUser className="hero-card-icon" />,
  FaUsers: <FaUsers className="hero-card-icon" />,
};

const HeroCard = ({ type, icon, border, styles }) => {
  return (
    <div
      className={`hero-card ${border ? styles.borderColor : ""} ${
        styles.cardBackgroundColor
      } ${styles.cardTextColor} ${styles.cardHoverShadow}`}
    >
      {icons[icon]} {/* Render the icon dynamically based on props */}
      <span className="hero-card-title">{type}</span>
    </div>
  );
};

export default HeroCard;

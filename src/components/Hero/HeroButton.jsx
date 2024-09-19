import React from "react";

const HeroButton = ({ buttonLabel, styles }) => {
  return (
    <button
      className={`hero-next-button ${styles.buttonColor} ${styles.buttonTextColor}`}
    >
      {buttonLabel}
    </button>
  );
};

export default HeroButton;

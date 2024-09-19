import React from "react";

const HeroTitle = ({ title, subtitle, question, styles }) => {
  return (
    <div className="mb-8 text-center">
      <h1 className={`hero-title ${styles.textColor}`}>{title}</h1>
      <p className={`hero-subtitle ${styles.textColor}`}>{subtitle}</p>
      <p className={`hero-question ${styles.textColor}`}>{question}</p>
    </div>
  );
};

export default HeroTitle;

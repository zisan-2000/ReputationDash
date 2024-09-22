import React from "react";

const ReputationSection = ({ title, paragraphs, styles }) => {
  return (
    <section className={` py-12 ${styles.backgroundColor}`}>
      <div className="reputation-section">
        {/* Section Title */}
        <h2 className={`reputation-title ${styles.titleColor}`}>{title}</h2>
        {/* Section Paragraphs */}
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`reputation-paragraph  ${styles.paragraphColor}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ReputationSection;

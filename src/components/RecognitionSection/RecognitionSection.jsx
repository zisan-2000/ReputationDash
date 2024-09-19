import React from "react";
import RecognitionItem from "./RecognitionItem"; // Import the RecognitionItem component

const RecognitionSection = ({ title, items, styles }) => {
  return (
    <section
      className={`${styles.sectionBackground} ${styles.containerSpacing}`}
    >
      <div className="recognition-section">
        {/* Section Title */}
        <h2 className={`recognition-title ${styles.titleTextColor}`}>
          {title}
        </h2>
        {/* Recognition Items */}
        <div className={`recognition-items ${styles.itemSpacing}`}>
          {items.map((item, index) => (
            <RecognitionItem key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;

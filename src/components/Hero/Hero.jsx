import React from "react";
import HeroButton from "./HeroButton";
import HeroCard from "./HeroCard";
import HeroTitle from "./HeroTitle";

const Hero = ({ title, subtitle, question, cards, buttonLabel, styles }) => {
  return (
    <section className={`${styles.backgroundColor} ${styles.textColor}`}>
      <div className="hero-container">
        {/* Hero Title Section */}
        <HeroTitle
          title={title}
          subtitle={subtitle}
          question={question}
          styles={styles}
        />

        {/* Hero Cards Section */}
        <div className="hero-card-container">
          {cards.map((card, index) => (
            <HeroCard
              key={index}
              type={card.type}
              icon={card.icon}
              border={card.border}
              styles={styles}
            />
          ))}
        </div>

        {/* Hero Button Section */}
        <HeroButton buttonLabel={buttonLabel} styles={styles} />
      </div>
    </section>
  );
};

export default Hero;

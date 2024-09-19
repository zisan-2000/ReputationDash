import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import RecognitionSection from "../components/RecognitionSection/RecognitionSection"; // Import the RecognitionSection component
import { headerData, heroData, recognitionData } from "../Data/Data"; // Import all necessary data

const Homepage = () => {
  return (
    <div>
      {/* Pass data and styles as props to the Header component */}
      <Header
        title={headerData.title}
        navLinks={headerData.navLinks}
        contact={headerData.contact}
        styles={headerData.styles} // Pass styles as props for Header
      />

      {/* Pass data and styles as props to the Hero component */}
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        question={heroData.question}
        cards={heroData.cards}
        buttonLabel={heroData.buttonLabel}
        styles={heroData.styles} // Pass styles as props for Hero
      />

      {/* Add Recognition Section with data and styles from recognitionData */}
      <RecognitionSection
        title={recognitionData.title}
        items={recognitionData.items}
        styles={recognitionData.styles} // Pass styles as props for Recognition Section
      />
    </div>
  );
};

export default Homepage;

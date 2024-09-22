import React from "react";
import SolutionCard from "./SolutionCard";

const SolutionsSection = ({ solutions }) => {
  return (
    <section className={` py-12 ${solutions.backgroundColor}`}>
      <div className="solutions-section">
        <div className="flex flex-col gap-16 md:flex-row md:justify-center">
          {/* Business Solutions */}
          <div className="solutions-category ">
            <h2 className="solutions-heading">{solutions.business.title}</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {solutions.business.cards.map((card, index) => (
                <div key={index} className="w-full sm:w-auto">
                  <SolutionCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    backgroundColor={card.backgroundColor} // Pass background color as props
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Individual Solutions */}
          <div className="solutions-category">
            <h2 className="solutions-heading">{solutions.individual.title}</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {solutions.individual.cards.map((card, index) => (
                <div key={index} className="w-full sm:w-auto">
                  <SolutionCard
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    backgroundColor={card.backgroundColor} // Pass background color as props
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

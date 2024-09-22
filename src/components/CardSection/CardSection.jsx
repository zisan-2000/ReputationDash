import React from "react";
import Card from "./Card";

const CardSection = ({ cards }) => {
  return (
    <section className="card-section bg-gray-50 py-12">
      <div className="container mx-auto flex flex-col justify-center gap-8 px-4 md:flex-row md:px-8 lg:px-16">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/2">
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;

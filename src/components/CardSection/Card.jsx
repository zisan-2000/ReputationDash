import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="card flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
      {/* Card Image */}
      <div className="card-image mb-4">
        <img
          src={image}
          alt={title}
          className="mx-auto h-32 w-32 object-contain"
        />
      </div>
      {/* Card Title */}
      <h3 className="card-title mb-2 text-xl font-bold">{title}</h3>
      {/* Card Description */}
      <p className="card-description text-gray-700">{description}</p>
    </div>
  );
};

export default Card;

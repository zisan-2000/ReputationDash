import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg">
      {/* Service Icon */}
      <div className="service-icon mb-4 text-5xl text-green-600">{icon}</div>
      {/* Service Title */}
      <h3 className="service-title mb-2 text-xl font-bold">{title}</h3>
      {/* Service Description */}
      <p className="service-description text-gray-700">{description}</p>
    </div>
  );
};

export default ServiceCard;

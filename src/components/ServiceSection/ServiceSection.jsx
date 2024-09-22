import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceSection = ({ title, paragraphs, services, styles }) => {
  return (
    <section className={`service-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto px-4 text-center md:px-8 lg:px-16">
        {/* Section Title */}
        <h2 className={`mb-6 text-3xl font-bold ${styles.titleColor}`}>
          {title}
        </h2>
        {/* Introductory Paragraphs */}
        {paragraphs.map((paragraph, index) => (
          <p key={index} className={`mb-6 text-lg ${styles.paragraphColor}`}>
            {paragraph}
          </p>
        ))}
        {/* Service Cards */}
        <div className="flex flex-col justify-center gap-8 md:flex-row">
          {services.map((service, index) => (
            <div key={index} className="w-full md:w-1/3">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

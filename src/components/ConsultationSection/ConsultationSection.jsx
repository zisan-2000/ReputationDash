import React from "react";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa"; // Importing necessary icons

const ConsultationSection = ({
  heading,
  points,
  phoneNumber,
  buttonText,
  imageSrc,
  styles,
}) => {
  return (
    <section className={`consultation-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row md:px-8 lg:px-16">
        {/* Left Content */}
        <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
          <h2 className={`mb-4 text-2xl font-bold ${styles.headingColor}`}>
            {heading}
          </h2>
          <ul className="mb-6">
            {points.map((point, index) => (
              <li key={index} className="mb-2 flex items-center">
                <FaCheckCircle className="mr-2 text-green-600" />
                <span className={`${styles.pointColor}`}>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center md:flex-row md:items-start">
            <div className="mb-4 md:mb-0 md:mr-4">
              <p className="mb-2 font-semibold">
                Speak to a Reputation Analyst
              </p>
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-green-700"
              >
                <FaPhoneAlt className="mr-2" /> {phoneNumber}
              </a>
            </div>
            <div>
              <p className="mb-2 font-semibold">
                Get Your Free Reputation Consultation
              </p>
              <button className="inline-flex items-center justify-center rounded-lg border border-green-600 px-6 py-2 text-green-600 transition-colors duration-300 hover:bg-green-600 hover:text-white">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
        {/* Right Content (Image) */}
        <div className="flex justify-center md:w-1/2 md:justify-end">
          <img
            src={imageSrc}
            alt="Consultation Illustration"
            className="w-full max-w-xs md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;

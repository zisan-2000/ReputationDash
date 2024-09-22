import React from "react";

const ContactSection = ({
  icon,
  heading,
  phoneText,
  phoneNumber,
  buttonText,
  styles,
}) => {
  return (
    <section className={`contact-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto text-center">
        {/* Icon */}
        <div className={`mb-4 flex justify-center`}>
          <div className={`text-6xl ${styles.iconColor}`}>{icon}</div>
        </div>
        {/* Heading */}
        <h3 className={`mb-2 text-xl font-bold ${styles.headingColor}`}>
          {heading}
        </h3>
        {/* Phone Number */}
        <p className={`mb-4 ${styles.phoneTextColor}`}>
          {phoneText}{" "}
          <a
            href={`tel:${phoneNumber}`}
            className={`font-bold ${styles.phoneNumberColor}`}
          >
            {phoneNumber}
          </a>
        </p>
        {/* Call to Action Button */}
        <button
          className={`rounded-lg px-6 py-2 ${styles.buttonColor} ${styles.buttonTextColor} ${styles.buttonHover}`}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default ContactSection;

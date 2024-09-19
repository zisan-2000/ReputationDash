import React from "react";

const HeaderContact = ({ contact, styles }) => {
  return (
    <div className="header-contact">
      <a href={`tel:${contact.phoneNumber}`} className={`${styles.textColor}`}>
        {contact.phoneNumber}
      </a>
      <button
        className={`header-contact-button ${styles.buttonColor} ${styles.buttonTextColor}`}
      >
        {contact.buttonLabel}
      </button>
    </div>
  );
};

export default HeaderContact;

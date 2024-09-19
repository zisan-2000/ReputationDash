import React from "react";

const Header = ({ title, navLinks, contact, styles }) => {
  return (
    <header className={`${styles.backgroundColor} ${styles.shadow}`}>
      <div className="header-container">
        <div className="header-title">
          <span className="header-title-black">{title.part1}</span>
          <span className="header-title-green">{title.part2}</span>
        </div>
        <nav className="header-nav">
          {navLinks.map((link, index) => (
            <a key={index} href={link.url} className={`${styles.textColor}`}>
              {link.name}
            </a>
          ))}
        </nav>
        <div className="header-contact">
          <a
            href={`tel:${contact.phoneNumber}`}
            className={`${styles.textColor}`}
          >
            {contact.phoneNumber}
          </a>
          <button
            className={`header-contact-button ${styles.buttonColor} ${styles.buttonTextColor}`}
          >
            {contact.buttonLabel}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

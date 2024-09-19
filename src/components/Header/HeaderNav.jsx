import React from "react";

const HeaderNav = ({ navLinks, styles }) => {
  return (
    <nav className="header-nav">
      {navLinks.map((link, index) => (
        <a key={index} href={link.url} className={`${styles.textColor}`}>
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default HeaderNav;

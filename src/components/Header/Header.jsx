import React from "react";
import HeaderContact from "./HeaderContact";
import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";

const Header = ({ title, navLinks, contact, styles }) => {
  return (
    <header className={`${styles.backgroundColor} ${styles.shadow}`}>
      <div className="header-container">
        {/* Header Title Section */}
        <HeaderTitle title={title} styles={styles} />

        {/* Header Navigation Section */}
        <HeaderNav navLinks={navLinks} styles={styles} />

        {/* Header Contact Section */}
        <HeaderContact contact={contact} styles={styles} />
      </div>
    </header>
  );
};

export default Header;

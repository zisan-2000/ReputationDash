import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing icons
import HeaderContact from "./HeaderContact";
import HeaderNav from "./HeaderNav";
import HeaderTitle from "./HeaderTitle";
import Sidebar from "./Sidebar"; // Importing Sidebar component

const Header = ({ title, navLinks, contact, styles }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={`${styles.backgroundColor} ${styles.shadow}`}>
      <div className="header-container">
        {/* Sidebar Toggle Icon for Mobile */}
        <div className="cursor-pointer lg:hidden" onClick={toggleSidebar}>
          <FaBars className={`${styles.textColor}`} size={24} />
        </div>

        {/* Header Title Section */}
        <HeaderTitle title={title} styles={styles} />

        {/* Header Navigation Section (Hidden on Mobile) */}
        <div className="hidden lg:flex">
          <HeaderNav navLinks={navLinks} styles={styles} />
        </div>

        {/* Header Contact Section (Hidden on Mobile) */}
        <div className="hidden lg:flex">
          <HeaderContact contact={contact} styles={styles} />
        </div>

        {/* Sidebar Component */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          navLinks={navLinks}
          contact={contact}
          styles={styles}
        />
      </div>
    </header>
  );
};

export default Header;

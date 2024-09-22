import React from "react";
import { FaTimes } from "react-icons/fa"; // Importing close icon

const Sidebar = ({ isOpen, toggleSidebar, navLinks, contact, styles }) => {
  return (
    <div
      className={`sidebar ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-xl font-bold">
          <span className="header-title-black">{contact.part1}</span>
          <span className="header-title-green">{contact.part2}</span>
        </h2>
        <FaTimes
          className="cursor-pointer text-gray-600"
          onClick={toggleSidebar}
          size={24}
        />
      </div>
      <div className="p-4">
        {/* Sidebar Navigation Links */}
        <nav className="mb-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className={`mb-4 block ${styles.textColor} hover:underline`}
              onClick={toggleSidebar} // Close sidebar on link click
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Sidebar Contact Information */}
        <div className="sidebar-contact">
          <a
            href={`tel:${contact.phoneNumber}`}
            className={`${styles.textColor} mb-4 block`}
          >
            {contact.phoneNumber}
          </a>
          <button
            className={`w-full rounded-lg py-2 ${styles.buttonColor} ${styles.buttonTextColor}`}
            onClick={toggleSidebar} // Close sidebar on button click
          >
            {contact.buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

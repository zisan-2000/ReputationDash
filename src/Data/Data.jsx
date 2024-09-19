import {
  FaAward,
  FaBusinessTime,
  FaHandsHelping,
  FaNewspaper,
  FaYahoo,
} from "react-icons/fa";

// Data for Header component
export const headerData = {
  title: {
    part1: "ORM",
    part2: "DASH",
  },
  navLinks: [
    { name: "THE PROCESS", url: "#" },
    { name: "BUSINESS", url: "#" },
    { name: "INDIVIDUAL", url: "#" },
    { name: "WHO WE SERVE", url: "#" },
    { name: "ABOUT US", url: "#" },
  ],
  contact: {
    phoneNumber: "01793-874189",
    buttonLabel: "Contact Us",
  },
  styles: {
    backgroundColor: "bg-white", // Background color for header
    textColor: "text-gray-800", // Text color for navigation links
    buttonColor: "bg-green-600", // Button background color
    buttonTextColor: "text-white", // Button text color
  },
};

// Data for Hero component
export const heroData = {
  title: "Control Your Reputation",
  subtitle: "America's Largest Online Reputation Management Company",
  question: "Which One Are You?",
  cards: [
    {
      type: "Individual",
      icon: "FaUser", // Icon name as a string
      border: true,
    },
    {
      type: "Business",
      icon: "FaUsers",
      border: false,
    },
  ],
  buttonLabel: "Next",
  styles: {
    backgroundColor: "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900", // Background color for hero section
    textColor: "text-white", // Text color for hero section
    cardBackgroundColor: "bg-white", // Card background color
    cardTextColor: "text-gray-800", // Card text color
    cardHoverShadow: "hover:shadow-2xl", // Card hover effect
    buttonColor: "bg-green-600", // Button background color
    buttonTextColor: "text-white", // Button text color
    borderColor: "border border-green-500", // Border color for individual card
  },
};

// Import necessary icons from react-icons

// Data for RecognitionSection component
export const recognitionData = {
  title:
    "Rated the Best Online Reputation Management Company in 2023 & 2024 by Newsweek.com and NeilPatel.com",
  items: [
    {
      icon: <FaYahoo className="recognition-item-icon text-purple-600" />,
      label: "Yahoo Finance",
    },
    {
      icon: <FaNewspaper className="recognition-item-icon text-red-600" />,
      label: "Newsweek",
    },
    {
      icon: <FaAward className="recognition-item-icon text-green-600" />,
      label: "Clutch 1000",
    },
    {
      icon: <FaBusinessTime className="recognition-item-icon text-blue-600" />,
      label: "Inc. 5000",
    },
    {
      icon: <FaHandsHelping className="recognition-item-icon text-pink-600" />,
      label: "Best Software",
    },
    {
      icon: <FaYahoo className="recognition-item-icon text-blue-900" />,
      label: "Forbes Council", // Placeholder icon and label
    },
  ],
  styles: {
    sectionBackground: "bg-gray-100", // Background color of the section
    titleTextColor: "text-gray-800", // Color of the section title
    itemSpacing: "space-x-14", // Spacing between recognition items
    containerSpacing: "py-10", // Padding for the section container
  },
};

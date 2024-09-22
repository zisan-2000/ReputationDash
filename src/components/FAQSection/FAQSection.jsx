import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa"; // Importing icons for expand/collapse

const FAQSection = ({ title, faqs, buttonLabel, styles }) => {
  const [expanded, setExpanded] = useState([]);

  // Function to toggle FAQ item
  const toggleFAQ = (index) => {
    if (expanded.includes(index)) {
      setExpanded(expanded.filter((item) => item !== index));
    } else {
      setExpanded([...expanded, index]);
    }
  };

  // Function to expand all FAQ items
  const expandAll = () => {
    setExpanded(faqs.map((_, index) => index));
  };

  // Function to collapse all FAQ items
  const collapseAll = () => {
    setExpanded([]);
  };

  return (
    <section className={`faq-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto px-4 text-center md:px-8 lg:px-16">
        {/* Section Title */}
        <h2 className={`mb-4 text-2xl font-bold ${styles.titleColor}`}>
          {title}
        </h2>
        {/* Expand/Collapse All */}
        <div className="mb-8 flex justify-center space-x-4">
          <button
            onClick={expandAll}
            className={`cursor-pointer text-sm font-semibold ${styles.linkColor}`}
          >
            Expand all
          </button>
          <span>|</span>
          <button
            onClick={collapseAll}
            className={`cursor-pointer text-sm font-semibold ${styles.linkColor}`}
          >
            Collapse all
          </button>
        </div>
        {/* FAQ Items */}
        <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item rounded-lg bg-white p-4 shadow-md"
            >
              <div
                onClick={() => toggleFAQ(index)}
                className="flex cursor-pointer items-center justify-between"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span>
                  {expanded.includes(index) ? (
                    <FaMinus className="text-gray-600" />
                  ) : (
                    <FaPlus className="text-gray-600" />
                  )}
                </span>
              </div>
              {expanded.includes(index) && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
        {/* View All FAQ Button */}
        <button
          className={`rounded-lg px-6 py-2 ${styles.buttonColor} ${styles.buttonTextColor} ${styles.buttonHover}`}
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
};

export default FAQSection;

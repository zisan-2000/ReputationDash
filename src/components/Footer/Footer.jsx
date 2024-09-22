import React from "react";

const Footer = ({ logo, contactInfo, socialMedia, links, styles }) => {
  return (
    <footer
      className={`footer py-12 ${styles.backgroundColor} ${styles.textColor}`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Logo and Contact Info */}
        <div className="footer-top mb-8 flex flex-col items-center justify-between md:flex-row">
          <div className="footer-logo mb-6 text-center md:mb-0 md:text-left">
            <h2 className="text-3xl font-bold">
              {logo.part1}
              <span className="text-green-500">{logo.part2}</span>
            </h2>
            <p className="mt-2 text-sm">{logo.tagline}</p>
          </div>
          <div className="footer-contact text-center md:text-right">
            <p>{contactInfo.address}</p>
            <p>
              Phone:{" "}
              <a href={`tel:${contactInfo.phone}`} className={styles.linkColor}>
                {contactInfo.phone}
              </a>
            </p>
            <p>ID#: {contactInfo.license}</p>
          </div>
        </div>

        <div className="footer-divider my-6 border-t border-gray-600"></div>

        {/* Footer Links */}
        <div className="footer-links grid grid-cols-1 gap-8 md:grid-cols-4">
          {links.map((section, index) => (
            <div key={index} className="footer-section">
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i} className="mb-2">
                    <a
                      href={item.url}
                      className={`${styles.linkColor} hover:underline`}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-divider my-6 border-t border-gray-600"></div>

        {/* Social Media Icons */}
        <div className="footer-bottom flex justify-center space-x-6">
          {socialMedia.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className={`${styles.socialIconColor} hover:${styles.socialIconHoverColor} transition-colors duration-300`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

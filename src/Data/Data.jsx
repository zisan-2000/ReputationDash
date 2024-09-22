import {
  FaAward,
  FaBusinessTime,
  FaHandsHelping,
  FaNewspaper,
  FaRegChartBar,
  FaRegLightbulb,
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

// Data for ReputationSection component
export const reputationData = {
  title: "Online Reputation Management Services",
  paragraphs: [
    "Navigating the online world can be difficult, but your Online Reputation doesn’t have to be. As one of the leading Online Reputation Companies, NetReputation begins by carefully examining online content and images, social media interactions, and search engine results. This step is vital to understanding your current online reputation score, whether you're an individual or a business. We analyze this information to create a clear picture of your current Online Reputation.",
    "Our Online Reputation Management Service, a key aspect of our offerings, is designed to meticulously manage and improve your digital footprint. Our Online Reputation Management Service is specifically designed to cater to a diverse clientele, ensuring tailored strategies for effective digital reputation management. As experts in Online Reputation Management Services, we understand the nuances of digital perception and work tirelessly to ensure that your online presence accurately reflects your values and vision.",
    "Once we have a complete understanding of your online presence, our next step is to enhance it. We achieve this by creating and sharing positive content across various online platforms. This content is not just any content – it’s specially designed to reflect your personal or business brand's best attributes and values, ensuring a positive impact on your audience.",
    "Business Reputation management is more important than ever, a robust online reputation is a cornerstone of success. As one of the most efficient Reputation Management Agencies, we understand the critical role of online reputation in business success and work diligently to maintain and enhance it. It’s about more than just making sales; it’s about building a brand that people trust and admire. We help you craft a competitive online image that attracts customers and sets you apart in your field. Additionally, our Review Management Service plays a pivotal role in shaping your company’s digital presence. By effectively managing online reviews, we enhance your brand's credibility, revenue, and customer trust.",
    "For individuals, a positive Personal Reputation Management plan is essential. Our team of skilled Reputation Management Consultants provides personalized guidance to ensure your personal brand flourishes in the digital space. Managing your online reputation can open new doors, whether it's for career advancement, personal branding, or building a professional network.",
  ],
  styles: {
    backgroundColor: "bg-gray-50", // Background color for the reputation section
    titleColor: "text-gray-900", // Color for the title text
    paragraphColor: "text-gray-700", // Color for the paragraph text
  },
};

// Import necessary icons from react-icons
// Import necessary icons from react-icons
import {
  FaChartLine,
  FaFileSignature,
  FaHandshake,
  FaLaptop,
  FaShieldAlt,
  FaTrashAlt,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";

// Data for Solutions Section
export const solutionsData = {
  backgroundColor: "bg-blue-50", // Background color for the entire solutions section
  business: {
    title: "BUSINESS SOLUTIONS",
    cards: [
      {
        icon: <FaChartLine />,
        title: "Reputation Management",
        description:
          "Control the digital narrative, improve online visibility, and build trust with reputation management solutions designed for businesses of all sizes.",
        backgroundColor: "bg-white", // Background color for individual card
      },
      {
        icon: <FaTrashAlt />,
        title: "Content Removal",
        description:
          "Remove harmful content and information that has the potential to damage your hard-earned online reputation.",
        backgroundColor: "bg-white", // Background color for individual card
      },
      {
        icon: <FaFileSignature />,
        title: "Business Consultation",
        description:
          "Get expert advice to build a strong online presence with our tailored business consultation services for digital growth and brand management.",
        backgroundColor: "bg-white", // Background color for individual card
      },
      {
        icon: <FaShieldAlt />,
        title: "Brand Protection",
        description:
          "Safeguard your brand's reputation from potential threats and online attacks with our comprehensive brand protection strategies.",
        backgroundColor: "bg-white", // Background color for individual card
      },
    ],
  },
  individual: {
    title: "INDIVIDUAL SOLUTIONS",
    cards: [
      {
        icon: <FaUserShield />,
        title: "Reputation Management",
        description:
          "Build, improve, and protect your positive personal reputation with reputation management services designed expressly for individuals, including professionals, celebrities, and more.",
        backgroundColor: "bg-white", // Background color for individual card
      },
      {
        icon: <FaLaptop />,
        title: "Content Removal",
        description:
          "Protect and restore your reputation with content removal services designed to target negative information, images, and social media content.",
        backgroundColor: "bg-white", // Background color for individual card
      },
      {
        icon: <FaUserTie />,
        title: "Personal Branding",
        description:
          "Enhance your personal brand and create a professional online persona with our customized personal branding strategies.",
        backgroundColor: "bg-white", // Background color for individual card
      },
      {
        icon: <FaHandshake />,
        title: "Career Management",
        description:
          "Get career advice and manage your professional reputation to create more opportunities in your field with our career management services.",
        backgroundColor: "bg-white", // Background color for individual card
      },
    ],
  },
};

// Data for Video Section
export const videoSectionData = {
  heading:
    "We help you take control of your online reputation with advanced online reputation management services.",
  subheading:
    "Remove, suppress, repair, and monitor your online reputation with the reputation experts.",
  videoSrc: "https://www.youtube.com/embed/TYOUR_VIDEO_ID", // Replace with your video URL or ID
  styles: {
    backgroundColor: "bg-gray-100", // Background color for the section
    headingColor: "text-gray-900", // Color for the heading text
    subheadingColor: "text-gray-700", // Color for the subheading text
  },
};

import image1 from "../assets/1.png";
// Data for Card Section
export const cardSectionData = {
  cards: [
    {
      image: image1, // Replace with your image path
      title: (
        <span>
          <span className="font-bold text-green-600">Suppress</span> Negative
          Google Results
        </span>
      ),
      description:
        "We have exclusive partnerships with high-authority sites that can build a positive reputation for your business – in real life and on Google. By creating fresh online content, we’re able to replace negative search results to repair your reputation.",
    },
    {
      image: image1, // Replace with your image path
      title: (
        <span>
          <span className="font-bold text-green-600">Impress</span> Everyone
        </span>
      ),
      description:
        "These days, brands are defined by what’s found online. A positive online reputation provides a competitive advantage that’s essential to business growth and success. You have one reputation - we make sure it’s a good one.",
    },
  ],
};

import image2 from "../assets/2.jpg";
// Data for Consultation Section
export const consultationSectionData = {
  heading: "Free Reputation Consultation",
  points: [
    "Find out how others see you online",
    "Entirely free, results provided instantly",
  ],
  phoneNumber: "(941) 584-5949",
  buttonText: "SCHEDULE A FREE CONSULTATION",
  imageSrc: image2, // Replace with your image path
  styles: {
    backgroundColor: "bg-gray-50", // Background color for the section
    headingColor: "text-gray-900", // Color for the heading text
    pointColor: "text-gray-700", // Color for the list items
  },
};

// Data for Service Section
export const serviceSectionData = {
  title: "Online Reputation Management Solutions",
  paragraphs: [
    "Our Online Reputation Management Service is comprehensive, covering all aspects of digital presence. We don’t just stop at monitoring and creating content. We also provide ongoing support, content removal, and strategy, helping you navigate the ever-changing digital landscape. Our team stays on top of trends and adapts strategies to ensure that your online reputation remains strong and positive, reflecting the dynamic nature of the internet.",
    "Recognized as a premier Reputation Management Firm and voted the Best Online Reputation Management Company by Newsweek.com and NeilPatel.com. As one of the top Reputation Management Agencies, NetReputation understands that each client has unique needs. That's why our solutions are tailored to meet the specific needs and challenges of each individual or business we work with. We collaborate closely with you to develop a strategy that not only improves your current online reputation but also safeguards it against future threats. We look forward to working with you soon.",
  ],
  services: [
    {
      icon: <FaRegChartBar />,
      title: "Reputation Analysis",
      description:
        "We conduct an in-depth analysis to determine all positive and negative items shaping your online reputation. We then use that insight to customize an effective internet reputation management strategy for removing threats and building a brand that puts you in control.",
    },
    {
      icon: <FaRegLightbulb />,
      title: "Asset Development",
      description:
        "Once the analysis is complete, we identify all of the business listings, social profiles, blogs and websites under your control. Our team will then develop optimized properties that fill in the gaps, allowing us to build a framework for posting positive content throughout your campaign.",
    },
    {
      icon: <FaLaptop />,
      title: "Content Creation",
      description:
        "New content creation on search engines is essential to online reputation management, as well as high-quality reputation repair and maintenance. We’ll develop high-quality, search-optimized articles, bios, blogs and guest posts to grow and strengthen your name across all Google searches for your brand.",
    },
  ],
  styles: {
    backgroundColor: "bg-gray-100", // Background color for the section
    titleColor: "text-gray-900", // Color for the title text
    paragraphColor: "text-gray-700", // Color for the paragraph text
  },
};

// Import necessary icons from react-icons
import { FaPhoneAlt } from "react-icons/fa";

// Data for Contact Section
export const contactSectionData = {
  icon: <FaPhoneAlt />, // Icon for the contact section
  heading: "Need Help Fixing Your Online Reputation?",
  phoneText: "Call us now at",
  phoneNumber: "(941) 584-5949",
  buttonText: "SCHEDULE A FREE CONSULTATION",
  styles: {
    backgroundColor: "bg-white", // Background color for the section
    iconColor: "text-green-600", // Color for the icon
    headingColor: "text-gray-900", // Color for the heading text
    phoneTextColor: "text-gray-700", // Color for the phone text
    phoneNumberColor: "text-green-600", // Color for the phone number
    buttonColor: "bg-green-600", // Background color for the button
    buttonTextColor: "text-white", // Text color for the button
    buttonHover: "hover:bg-green-700 transition-colors duration-300", // Hover effect for the button
  },
};

// Import necessary icons from react-icons

// Data for FAQ Section
export const faqSectionData = {
  title: "Frequently Asked Questions",
  faqs: [
    {
      question: "What is ORM?",
      answer:
        "ORM stands for Online Reputation Management, which involves strategies and techniques to manage and improve your online reputation.",
    },
    {
      question: "What is a reputation management strategy?",
      answer:
        "A reputation management strategy involves managing how a business or individual is perceived online by influencing and monitoring online content.",
    },
    {
      question: "What is the first step in reputation management?",
      answer:
        "The first step in reputation management is to conduct a thorough analysis of your current online presence and identify areas that need improvement.",
    },
    {
      question: "How long does online reputation management take?",
      answer:
        "The time required for online reputation management varies based on the complexity of the issues and the desired outcomes, but it typically takes several months.",
    },
    {
      question: "Why is online reputation management important?",
      answer:
        "Online reputation management is important because it helps individuals and businesses maintain a positive image, build trust, and prevent or recover from negative publicity.",
    },
    {
      question: "How does reputation management work?",
      answer:
        "Reputation management works by monitoring online mentions, creating positive content, and suppressing or removing negative content to improve the overall perception.",
    },
    {
      question: "What does online reputation management cost?",
      answer:
        "The cost of online reputation management varies based on the services required and the provider, but it can range from a few hundred to several thousand dollars per month.",
    },
    {
      question: "Why should I invest in reputation management?",
      answer:
        "Investing in reputation management helps protect your personal or business brand, build trust with your audience, and prevent potential loss of revenue due to negative publicity.",
    },
    {
      question: "Is NetReputation a good company?",
      answer:
        "NetReputation is known for providing effective online reputation management services to both individuals and businesses, helping them improve their online image.",
    },
    {
      question: "Can reputation be managed?",
      answer:
        "Yes, reputation can be managed through proactive strategies like monitoring online mentions, creating positive content, and addressing negative feedback promptly.",
    },
  ],
  buttonLabel: "View All FAQ",
  styles: {
    backgroundColor: "bg-gray-100", // Background color for the section
    titleColor: "text-gray-900", // Color for the title text
    linkColor: "text-green-600", // Color for the Expand/Collapse links
    buttonColor: "bg-green-600", // Background color for the button
    buttonTextColor: "text-white", // Text color for the button
    buttonHover: "hover:bg-green-700 transition-colors duration-300", // Hover effect for the button
  },
};

// Import necessary icons from react-icons

// Data for Review Section
export const reviewSectionData = {
  title: "Excellent",
  rating: 4.8,
  totalReviews: 285,
  reviews: [
    {
      rating: 5,
      name: "Philip J. Berenz",
      date: "2 days ago",
      title: "This team is incredible",
      content: "This team is incredible. Cannot recommend more highly!",
    },
    {
      rating: 5,
      name: "Anonymous",
      date: "September 15",
      title: "Negative reviews were taken down within 1 week",
      content: "Negative reviews were taken down within 1 week.",
      reply: "Reply from NetReputation",
      replyDate: "5 days ago",
    },
    {
      rating: 5,
      name: "Michael Watts",
      date: "September 11",
      title: "I was Skeptical I have hired a company...",
      content:
        "I was Skeptical I have hired a company just like this before all they did was take my money. This company gave me instant results. Thank You Net Reputation.",
      reply: "Reply from NetReputation",
      replyDate: "September 12",
    },
    {
      rating: 5,
      name: "AST",
      date: "September 11",
      title: "Thank you to John Borkowski and his team...",
      content:
        "Thank you to John Borkowski and his team at NetReputation. They did exactly as promised and with no delay. I would not hesitate to recommend them to any business.",
    },
    {
      rating: 5,
      name: "Marie",
      date: "September 14",
      title: "Our new strategist Andrew was amazing",
      content:
        "Our new strategist Andrew was amazing. Not only did he recognize the issue at hand he responded quickly. There was follow up and availability that we really needed at this time in our journey. We appreciate the help.",
      reply: "Reply from NetReputation",
      replyDate: "5 days ago",
    },
    {
      rating: 5,
      name: "customer",
      date: "September 12",
      title: "Quick removal of 1-star ratings from bots",
      content:
        "We had several negative Google Reviews that were clearly not written by real people. Google failed to remove these when we flagged them, but NetReputation did so in a matter of a few days.",
      reply: "Reply from NetReputation",
      replyDate: "September 13",
    },
    {
      rating: 5,
      name: "Lauren T.",
      date: "September 10",
      title: "Great experience with Kayden Koch at NetReputation",
      content:
        "Hayden Koch has been a tremendous help with our case. Very professional and follows up weekly. Very happy with their work so far.",
    },
    {
      rating: 5,
      name: "William Koontz",
      date: "September 4",
      title: "I have been working with my dedicated...",
      content:
        "I have been working with my dedicated team for over 2 years, and these guys do a fantastic job. We’ve learned a lot from each other and developed a strong strategy to keep my reputation intact.",
    },
  ],
  styles: {
    backgroundColor: "bg-gray-100", // Background color for the section
    titleColor: "text-gray-900", // Color for the title text
    ratingColor: "text-gray-700", // Color for the rating text
  },
};

// Import necessary icons from react-icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// Data for Footer Section
export const footerData = {
  logo: {
    part1: "ORM",
    part2: "DASH",
    tagline: "EXPERT REPUTATION MANAGEMENT",
  },
  contactInfo: {
    address: "Web Presence, LLC | 1100 N Tuttle Ave. Sarasota, FL 34237",
    phone: "(941) 584-5949",
    license: "E0465172014-0",
  },
  socialMedia: [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/" },
    { icon: <FaTwitter />, url: "https://www.twitter.com/" },
    { icon: <FaYoutube />, url: "https://www.youtube.com/" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/" },
  ],
  links: [
    {
      title: "Business Services",
      items: [
        { name: "Reputation Management", url: "#" },
        { name: "Reputation Monitoring", url: "#" },
        { name: "Branding Solutions", url: "#" },
        { name: "Public Relations", url: "#" },
      ],
    },
    {
      title: "Individual Services",
      items: [
        { name: "Reputation Management", url: "#" },
        { name: "Reputation Monitoring", url: "#" },
        { name: "Internet Privacy", url: "#" },
        { name: "Branding", url: "#" },
      ],
    },
    {
      title: "Learn More",
      items: [
        { name: "Our Team", url: "#" },
        { name: "About Us", url: "#" },
        { name: "The Process", url: "#" },
        { name: "What Goes Into It", url: "#" },
      ],
    },
    {
      title: "Resources",
      items: [
        { name: "Blog", url: "#" },
        { name: "Contact Us", url: "#" },
        { name: "News and Press", url: "#" },
        { name: "Become an Affiliate", url: "#" },
      ],
    },
  ],
  styles: {
    backgroundColor: "bg-gray-900", // Background color for the footer
    textColor: "text-white", // Text color for the footer
    linkColor: "text-gray-400", // Link color for footer links
    socialIconColor: "text-gray-400", // Color for social media icons
    socialIconHoverColor: "text-green-500", // Hover color for social media icons
  },
};

import React from "react";
import CardSection from "../components/CardSection/CardSection";
import ConsultationSection from "../components/ConsultationSection/ConsultationSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FAQSection from "../components/FAQSection/FAQSection";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import RecognitionSection from "../components/RecognitionSection/RecognitionSection"; // Import the RecognitionSection component
import ReputationSection from "../components/ReputationSection/ReputationSection";
import ReviewSection from "../components/ReviewSection/ReviewSection";
import ServiceSection from "../components/ServiceSection/ServiceSection";
import SolutionsSection from "../components/Solutions/SolutionsSection";
import VideoSection from "../components/VideoSection/VideoSection";
import {
  cardSectionData,
  consultationSectionData,
  contactSectionData,
  faqSectionData,
  footerData,
  headerData,
  heroData,
  recognitionData,
  reputationData,
  reviewSectionData,
  serviceSectionData,
  solutionsData,
  videoSectionData,
} from "../Data/Data"; // Import all necessary data

const Homepage = () => {
  return (
    <div>
      {/* Pass data and styles as props to the Header component */}
      <Header
        title={headerData.title}
        navLinks={headerData.navLinks}
        contact={headerData.contact}
        styles={headerData.styles} // Pass styles as props for Header
      />

      {/* Pass data and styles as props to the Hero component */}
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        question={heroData.question}
        cards={heroData.cards}
        buttonLabel={heroData.buttonLabel}
        styles={heroData.styles} // Pass styles as props for Hero
      />

      {/* Add Recognition Section with data and styles from recognitionData */}
      <RecognitionSection
        title={recognitionData.title}
        items={recognitionData.items}
        styles={recognitionData.styles} // Pass styles as props for Recognition Section
      />

      {/* Add Reputation Section with data from reputationData */}
      {/* Add Reputation Section with data and styles from reputationData */}
      <ReputationSection
        title={reputationData.title}
        paragraphs={reputationData.paragraphs}
        styles={reputationData.styles} // Pass styles as props for Reputation Section
      />

      {/* Add Solutions Section with data from solutionsData */}
      <SolutionsSection solutions={solutionsData} />

      {/* Add Video Section with data from videoSectionData */}
      <VideoSection
        heading={videoSectionData.heading}
        subheading={videoSectionData.subheading}
        videoSrc={videoSectionData.videoSrc}
        styles={videoSectionData.styles} // Pass styles as props
      />

      {/* Add Card Section with data from cardSectionData */}
      <CardSection cards={cardSectionData.cards} />

      {/* Add Consultation Section with data from consultationSectionData */}
      <ConsultationSection
        heading={consultationSectionData.heading}
        points={consultationSectionData.points}
        phoneNumber={consultationSectionData.phoneNumber}
        buttonText={consultationSectionData.buttonText}
        imageSrc={consultationSectionData.imageSrc}
        styles={consultationSectionData.styles} // Pass styles as props
      />

      {/* Add Service Section with data from serviceSectionData */}
      <ServiceSection
        title={serviceSectionData.title}
        paragraphs={serviceSectionData.paragraphs}
        services={serviceSectionData.services}
        styles={serviceSectionData.styles} // Pass styles as props
      />

      {/* Add Contact Section with data from contactSectionData */}
      <ContactSection
        icon={contactSectionData.icon}
        heading={contactSectionData.heading}
        phoneText={contactSectionData.phoneText}
        phoneNumber={contactSectionData.phoneNumber}
        buttonText={contactSectionData.buttonText}
        styles={contactSectionData.styles} // Pass styles as props
      />

      {/* Add FAQ Section with data from faqSectionData */}
      <FAQSection
        title={faqSectionData.title}
        faqs={faqSectionData.faqs}
        buttonLabel={faqSectionData.buttonLabel}
        styles={faqSectionData.styles} // Pass styles as props
      />

      {/* Add Review Section with data from reviewSectionData */}
      <ReviewSection
        title={reviewSectionData.title}
        rating={reviewSectionData.rating}
        totalReviews={reviewSectionData.totalReviews}
        reviews={reviewSectionData.reviews}
        styles={reviewSectionData.styles} // Pass styles as props
      />

      {/* Add Footer Section with data from footerData */}
      <Footer
        logo={footerData.logo}
        contactInfo={footerData.contactInfo}
        socialMedia={footerData.socialMedia}
        links={footerData.links}
        styles={footerData.styles} // Pass styles as props
      />
    </div>
  );
};

export default Homepage;

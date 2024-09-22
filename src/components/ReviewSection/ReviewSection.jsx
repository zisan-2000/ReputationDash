import React from "react";
import { FaStar } from "react-icons/fa";
import ReviewCard from "./ReviewCard"; // Import the ReviewCard component

const ReviewSection = ({ title, rating, totalReviews, reviews, styles }) => {
  return (
    <section className={`review-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto px-4 text-center md:px-8 lg:px-16">
        {/* Section Title */}
        <h2 className={`mb-4 text-3xl font-bold ${styles.titleColor}`}>
          {title}
        </h2>
        {/* Overall Rating */}
        <div className="mb-4 flex items-center justify-center">
          <div className="flex items-center">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar key={i} className="mr-1 text-green-600" />
              ))}
          </div>
          <p className={`ml-2 ${styles.ratingColor}`}>
            Rated {rating} / 5 based on {totalReviews} reviews on Trustpilot
          </p>
        </div>
        {/* Review Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;

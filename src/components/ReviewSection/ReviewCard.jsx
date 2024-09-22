import React from "react";
import { FaReply, FaStar } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card mb-4 rounded-lg bg-white p-4 shadow-md">
      {/* Star Rating */}
      <div className="mb-2 flex items-center">
        {Array(review.rating)
          .fill()
          .map((_, i) => (
            <FaStar key={i} className="mr-1 text-green-600" />
          ))}
      </div>
      {/* Reviewer Details */}
      <p className="mb-1 text-sm text-gray-600">
        {review.name}, {review.date}
      </p>
      {/* Review Title */}
      <h4 className="mb-2 font-semibold">{review.title}</h4>
      {/* Review Text */}
      <p className="mb-4 text-gray-700">{review.content}</p>
      {/* Reply from Company */}
      {review.reply && (
        <div className="mb-2 rounded-md bg-gray-100 p-3">
          <FaReply className="mr-2 inline text-gray-500" />
          <span className="text-gray-800">{review.reply}</span>
          <span className="mt-1 block text-sm text-gray-500">
            {review.replyDate}
          </span>
        </div>
      )}
      {/* Read More Link */}
      <a href="#" className="text-sm font-semibold text-green-600">
        Read more
      </a>
    </div>
  );
};

export default ReviewCard;

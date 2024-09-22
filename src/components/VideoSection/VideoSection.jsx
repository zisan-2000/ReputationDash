import React from "react";

const VideoSection = ({ heading, subheading, videoSrc, styles }) => {
  return (
    <section className={`video-section py-12 ${styles.backgroundColor}`}>
      <div className="container mx-auto flex flex-col items-center px-4 md:flex-row md:px-8 lg:px-16">
        {/* Text Content */}
        <div className="mb-8 text-center md:mb-0 md:w-1/2 md:text-left">
          <h2 className={`mb-4 text-2xl font-bold ${styles.headingColor}`}>
            {heading}
          </h2>
          <p className={`text-lg ${styles.subheadingColor}`}>{subheading}</p>
        </div>
        {/* Video Content */}
        <div className="flex justify-center md:w-1/2 md:justify-end">
          <iframe
            className="h-56 w-full rounded-lg shadow-lg md:w-96"
            src={videoSrc}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

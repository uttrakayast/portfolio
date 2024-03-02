import React, { useEffect, useState } from "react";
import {
  ImTv,
} from "react-icons/im";

const MindMeadowProjectCard = () => {
  const images = [
    "/mindmeadow.png",
    "/mindmeadowMobile.png",
    // Add more image paths as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentImageIndex]);

  const handleButtonClick = () => {
    // Define the URL of the live demo page
    const liveDemoUrl = 'https://www.mindmeadow.in/'; // Replace with the actual URL of your live demo

    // Open the live demo page in a new browser window or tab
    window.open(liveDemoUrl, '_blank');
  };

  return (
    <div className="section-proj">
      <div className="container">
        <div
          className="carousel"
          style={{
            width: 400,
            height: 350,
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#F1F1F1",
            borderRadius: "10px"
          }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="project-desc">
          <h4 style={{ color: "#6BC067", fontSize: "1.1rem" }}>Mind Meadow</h4>
          <h1
            className="hero-text"
            style={{
              fontSize: "1rem",
              marginTop: "0.5rem",
              marginBottom: "0.7rem",
            }}
          >
            Center for Child Development & Mental Health Services.
          </h1>
          {/* Table Here */}
          <p>
            Designed and developed a Website and Mobile Application for Mind
            Meadow which is a Multidisciplinary Center focused on Child
            Development & Mental Health Services.
          </p>

          {/* Buttons */}
          <button
            style={{
              border: "1.5px solid #6BC067", // Black border
              borderRadius: "5px", // Rounded corners
              padding: "10px 20px", // Padding
              fontSize: "15px", // Font size
              fontWeight: "bold", // Bold text
              cursor: "pointer", // Cursor on hover
              backgroundColor: "transparent", // Transparent background
              color: "#6BC067", // Black text color
              outline: "none", // Remove default focus outline
              marginTop: "2vh"
            }}
            onClick={handleButtonClick}
          >
            Live Demo
            <span style={{ marginLeft: '8px' }}>
                <ImTv fontSize="15" color="#6BC067"/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MindMeadowProjectCard;

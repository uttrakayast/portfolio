import React, { useEffect, useState } from "react";
import { ImTv } from "react-icons/im";

const ProjectCard = (props) => {
  const images = props.images;

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

  // useEffect(() => {
  //   const intervalId = setInterval(nextSlide, 5000); // Change slide every 5 seconds

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [currentImageIndex]);

  const handleButtonClick = () => {
    // Define the URL of the live demo page
    const liveDemoUrl = props.link; // Replace with the actual URL of your live demo

    // Open the live demo page in a new browser window or tab
    window.open(liveDemoUrl, "_blank");
  };

  var colorCode = props.colorCode

  return (
    <div className="section-proj">
      <div className="container">
        <div className="carousel">
          <img
            src={props.image}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="left-text">
          <h4 style={{ color: colorCode, fontSize: "1.1rem" }}>{props.name}</h4>
          <h1
            className="hero-text"
            style={{
              fontSize: "1rem",
              marginTop: "0.5rem",
              marginBottom: "0.7rem",
            }}
          >
            {props.shortdesc}
          </h1>
          <p>
            {props.desc}
          </p>

          {/* Buttons */}
          <button
            style={{
              border: `1.5px solid ${colorCode}`, // Black border
              borderRadius: "5px", // Rounded corners
              padding: "10px 20px", // Padding
              fontSize: "15px", // Font size
              fontWeight: "bold", // Bold text
              cursor: "pointer", // Cursor on hover
              backgroundColor: "transparent", // Transparent background
              color: colorCode, // Black text color
              outline: "none", // Remove default focus outline
              marginTop: "2vh",
            }}
            onClick={handleButtonClick}
          >
            Live Demo
            <span style={{ marginLeft: "8px" }}>
              <ImTv fontSize="15" color={{colorCode}} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

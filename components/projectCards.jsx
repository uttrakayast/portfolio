import Image from "next/image";
import React from "react";

var Projects = () => {
  return (
    <>
      <div className="section" id="about">
        <div className="container">
          {/* <div>
            <Image
              src="/about.gif"
              width="400"
              height="350"
              alt="aboutImage"
              style={{
                borderRadius: "5%",
              }}
            />
          </div> */}
          <div className="aboutMe-desc">
            <h4
              style={{
                color: "#847eff",
                fontSize: "1.1rem",
              }}
            >
              Projects
            </h4>
            <h1
              className="hero-text"
              style={{
                fontSize: "1.5rem",
                marginTop: "0.5rem",
                marginBottom: "0.7rem",
              }}
            >
              Every Project here is solving some problem in real world 
            </h1>
            <p
              style={{
                color: "#767676",
                fontSize: "1.0rem",
                justifyContent: "center",
                fontWeight: "500",
                lineHeight: "1.5",
              }}
            >
              
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

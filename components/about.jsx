import Image from "next/image";
import React from "react";

var About = () => {
  return (
    <>
      <div className="section" id="about" style={{marginLeft: 30, marginRight: 30}}>
        <div className="container">
          <div>
            <Image
              src="/about.gif"
              width="400"
              height="350"
              alt="aboutImage"
              style={{
                borderRadius: "5%",
              }}
            />
          </div>
          <div className="aboutMe-desc">
            <h4
              style={{
                color: "#847eff",
                fontSize: "1.1rem",
              }}
            >
              ABOUT ME
            </h4>
            <h1
              className="hero-text"
              style={{
                fontSize: "1.5rem",
                marginTop: "0.5rem",
                marginBottom: "0.7rem",
              }}
            >
              A Frontend Developer based in Delhi, India 📍
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
             I’m a passionate Frontend Developer with a strong foundation in building responsive, user-friendly web interfaces using technologies like HTML, CSS, JavaScript, and React. I enjoy turning complex problems into simple, beautiful, and intuitive designs. With a focus on performance and accessibility, I aim to build applications that are fast, scalable, and engaging.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

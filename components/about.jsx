import Image from "next/image";
import React from "react";

var About = () => {
  return (
    <>
      <div className="section" id="about">
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
              A Software Engineer based in Delhi, India 📍
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
              📱 Full Stack Mobile Developer based in Delhi, India 📍 |
              Specializing in Android (Kotlin/Java), Flutter, React Native |
              Proficient in Node JS, Django (Python) | Expertise in crafting
              dynamic UIs, optimizing code, and leveraging AWS for robust
              backends. Passionate about delivering seamless user experiences
              and collaborating with cross-functional teams. Let&apos;s build
              something incredible together! #MobileDev #Backend #AWS
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

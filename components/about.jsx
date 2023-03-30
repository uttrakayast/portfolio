import Image from "next/image";
import React from "react";

var About = () => {
    return (
        <>
            <div className=" section">
                <div className="container">
                    <div >
                        <Image src="/macImageAbout.webp" width="400" height="350" alt="aboutImage" style={{
                        borderRadius: "5%"
                    }} />
                    </div>
                    <div className="aboutMe-desc">
                        <h4 style={{
                            color: "#147efb",
                            fontSize: "1.1rem"
                        }}>ABOUT ME</h4>
                        <h1 className="hero-text" style={{ fontSize: "1.5rem", marginTop: "0.5rem", marginBottom: "0.7rem" }}>
                            A Mobile Developer based in Delhi, India 📍
                        </h1>
                        <p style={{
                            color: "#767676",
                            fontSize: "1.0rem",
                            justifyContent: "center",
                            fontWeight: "500",
                            lineHeight: "1.5"
                        }}>
                            A dedicated Front-end Developer
                            based in Belgrade, Serbia 📍
                            As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
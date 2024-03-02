import Image from "next/image";
import React from "react";
import MindMeadowProjectCard from "./mindmeadowCard";
import { FaithBookProjectCard } from "./faithbookCard";
import OPProjectCard from "./opCard";

var Projects = () => {
  return (
    <>
      <div className="section-proj-main" id="projects">
        <div className="container-projects">
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
                marginBottom: "1.7rem",
              }}
            >
              All Project here are End-to-End Solutions
            </h1>
            <MindMeadowProjectCard />
            
            <OPProjectCard />

            <FaithBookProjectCard />

          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

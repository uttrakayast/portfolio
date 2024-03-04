import React from "react";
import ProjectCard from "./projectCard";

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
            <ProjectCard name="Mind Meadow" shortdesc="Center for Child Development & Mental Health Services." desc="Designed and developed a Website and Mobile Application for Mind
            Meadow which is a Multidisciplinary Center focused on Child
            Development & Mental Health Services." link="https://www.mindmeadow.in/" image="/mindmeadow.png" colorCode="#6BC067" />
            
            <ProjectCard name="Faithbook" shortdesc="Social Media for Catholic Youth in India" desc="Designed and developed a Website as well as
            a user-friendly mobile application for FAITHBOOK which
            offers a platform for connecting and bonding the catholic community." link="https://www.myfaithbook.in/" image="/faithbook-web.png" colorCode="#0B6375" />

<ProjectCard name="Opportunity Plate" shortdesc="Job Seekers and Recruiters Network." desc="Opportunity plate is a platform that initiates an interactive
            approach that directly links and closes the gap between job seekers
            and recruiters. Main motive was developing an
            attractive website and application keeping in mind the visual
            elements as well as functionality." link="https://www.opportunityplate.com/" image="/OP.png" colorCode="#96C13E" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

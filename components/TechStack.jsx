import React from "react";
import Image from "next/image";

var TechStack = () => {
  return (
    <>
      <div className="main tech-stack">
        <div className="container-tech-stack">
          <h2 className="stack-text">Tech Stack | </h2>
          <div className="circle" title="Flutter">
            <Image
              src="/flutterio-icon.svg"
              width="35"
              height="35"
              alt="flutter"
            />
          </div>
          <div className="circle" title="Android">
            <Image
              src="/android-logo.png"
              width="35"
              height="35"
              alt="python"
            />
          </div>
          <div className="circle" title="iOS">
            <Image src="/apple-logo.png" width="35" height="35" alt="python" />
          </div>
          <div className="circle" title="React">
            <Image src="/react-logo.png" width="40" height="40"></Image>
          </div>
          <div className="circle" title="Django">
            <Image src="/django-logo.svg" width="35" height="35" alt="django" />
          </div>
          <div className="circle" title="Amazon Web Services (Cloud)">
            <Image src="/aws-logo.svg" width="35" height="35" alt="aws" />
          </div>
          <div className="circle" title="PostgreSQL">
            <Image src="/postgresql-logo.svg" width="35" height="35" alt="db" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;

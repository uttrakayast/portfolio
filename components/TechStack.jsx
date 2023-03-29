import React from "react";
import Image from "next/image";

var TechStack = () => {
    return (
        <>
            <div className="main tech-stack">
                <div className="container-tech-stack">
                    <h2 className='stack-text'>Tech Stack | </h2>
                    <div className="circle" title="Flutter">
                        <Image src="/flutterio-icon.svg" width="35" height="35"></Image>
                    </div>
                    <div className="circle" title="React">
                        <Image src="https://stefantopalovicdev.vercel.app/static/media/react.afac9c43724070bf6674f2692b7356a9.svg " width="40" height="40"></Image>

                    </div>
                    <div className="circle" title="Python">
                        <Image src="/python-logo.svg" width="35" height="35"></Image>
                    </div>
                    {/* <div className="circle">
                        <Image src="https://stefantopalovicdev.vercel.app/static/media/javascript.de4c2594613e34b15666206bbede7327.svg" width="35" height="35"></Image>

                    </div> */}
                   
                    <div className="circle" title="Django">
                        <Image src="/django-logo.svg" width="35" height="35"></Image>
                    </div>
                    <div className="circle" title="Amazon Web Services (Cloud)">
                        <Image src="/aws-logo.svg" width="35" height="35"></Image>
                    </div>
                    <div className="circle" title="PostgreSQL">
                        <Image src="/postgresql-logo.svg" width="35" height="35"></Image>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default TechStack

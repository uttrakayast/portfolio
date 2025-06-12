import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import {
  // ImTwitter,
  ImInstagram,
  ImWhatsapp,
  // ImLinkedin2,
  ImGithub,
} from "react-icons/im";

var Contact = () => {
  return (
    <>
      <div className="contact-section" id="contact">
        <div className="">
          <h4
            style={{
              color: "#147efb",
              fontSize: "1.1rem",
            }}
          >
            Contact
          </h4>
          <h1
            className="hero-text"
            style={{
              fontSize: "1.5rem",
              marginTop: "0.5rem",
              marginBottom: "0.7rem",
            }}
          >
          Got something on your mind? 
            {/* Come on, Say Something! */}
          </h1>
          <h6
            className="hero-text"
            style={{
              fontSize: "0.8rem",
              marginTop: "0.5rem",
            }}
          >
            Options are on the Table! Let&apos;s chat!
          </h6>
          <div className="container-tech-stack" style={{ marginTop: "3rem" }}>
            <Link href="tel:7836872908">
              <div className="circle" title="Phone">
                <AiFillPhone fontSize="30" color="#147efb" />
              </div>
            </Link>
            <Link href="mailto:uttarakayast@gmail.com">
              <div className="circle" title="Mail">
                <AiFillMail fontSize="30" color="#147efb" />
              </div>
            {/* </Link> */}
            {/* <Link href="https://twitter.com/not_umesh" target="_blank">
              <div className="circle" title="Twitter">
                <ImTwitter fontSize="30" color="#147efb" />
              </div> */}
            </Link>
            <Link href="https://www.instagram.com/uttra_kayast/" target="_blank">
              <div className="circle" title="Instagram">
                <ImInstagram fontSize="30" color="#147efb" />
              </div>
            </Link>
            <Link
              href="https://web.whatsapp.com/"
              target="_blank"
            >
              {/* <div className="circle" title="Twitter">
                <ImWhatsapp fontSize="30" color="#147efb" />
              </div> */}
            </Link>
            {/* <Link href="https://www.linkedin.com/in/its-umesh/" target="_blank"> */}
              {/* <div className="circle" title="LinkedIn">
                <ImLinkedin2 fontSize="30" color="#147efb" />
              </div>
            </Link> */}
            <Link href="https://github.com/" target="_blank">
              <div className="circle" title="GitHub">
                <ImGithub fontSize="30" color="#147efb" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

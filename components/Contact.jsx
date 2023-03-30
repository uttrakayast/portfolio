import Image from "next/image";
import React from "react";
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
import { ImTwitter, ImInstagram, ImWhatsapp } from 'react-icons/im'

var Contact = () => {
    return (
        <>
            <div className="contact-section" id="contact">
                <div className="">
                <h4 style={{
                            color: "#147efb",
                            fontSize: "1.1rem"
                        }}>
                            Contact
                        </h4>
                        <h1 className="hero-text" style={{ fontSize: "1.5rem", marginTop: "0.5rem", marginBottom: "0.7rem" }}>
                            Come on, Say Something!
                        </h1>
                        <div className="container-tech-stack" style={{marginTop: "3rem"}}>
                        <div className="circle" title="Phone">
                            <AiFillPhone fontSize="30" color="#147efb"/>
                        </div>
                        <div className="circle" title="Email">
                            <AiFillMail fontSize="30" color="#147efb"/>
                        </div>
                        <div className="circle" title="Twitter">
                            <ImTwitter fontSize="30" color="#147efb"/>
                        </div>
                        <div className="circle" title="Twitter">
                            <ImInstagram fontSize="30" color="#147efb"/>
                        </div>
                        <div className="circle" title="Twitter">
                            <ImWhatsapp fontSize="30" color="#147efb"/>
                        </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Contact
import Image from "next/image";
import Link from "next/link";
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
                        <Link href="tel:9718649768">
                        <div className="circle" title="Twitter">
                            <AiFillPhone fontSize="30" color="#147efb"/>
                        </div>
                        </Link>
                        <Link href="mailto:uk481281@gmail.com">
                        <div className="circle" title="Twitter">
                            <AiFillMail fontSize="30" color="#147efb"/>
                        </div>
                        </Link>
                        <Link href="https://twitter.com/not_umesh" target="_blank">
                        <div className="circle" title="Twitter">
                            <ImTwitter fontSize="30" color="#147efb"/>
                        </div>
                        </Link>
                        <Link href="https://instagram.com/say_hon3y" target="_blank">
                        <div className="circle" title="Instagram">
                            <ImInstagram fontSize="30" color="#147efb"/>
                        </div>
                        </Link>
                        <Link href="https://api.whatsapp.com/send/?phone=919718649768&text=Hey%20Umesh" target="_blank">
                            <div className="circle" title="Twitter">
                                <ImWhatsapp fontSize="30" color="#147efb"/>
                            </div>
                        </Link>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Contact
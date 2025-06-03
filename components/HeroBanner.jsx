import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Typewriter from "typewriter-effect";

var HeroBanner = () => {
    return (
        <>
            <div className="main" >
                <div className='container' style={{
                marginTop: "8rem"
            }}>
                    <div className="left">
                        <div className='title-text'>
                            <h1 className='hero-text'>
                                <Typewriter options={{
                                    strings: ['Flutter Mobile 📱 Developer', 'Full Stack Mobile 📱 Developer', 'Frontend 👨🏼‍💻 Developer'],
                                    autoStart: true,
                                    loop: true,
                                }} />
                            </h1>
                        </div>
                        <h3 className='desc'>Hi, I&apos;m Uttra. A passionate Flutter Developer based at Delhi, India. 📍</h3>
                        <div className='profiles'>
                            {/* <Link href="https://www.linkedin.com/in/its-umesh/" target="_blank"> */}
                                {/* <FaLinkedin className="social-logo linkedIn" fontSize="30px" /> */}
                            {/* </Link> */}
                            <Link href="https://github.com/" target="_blank">
                                <FaGithub className="social-logo github" fontSize="30px" />
                            </Link>
                        </div>
                    </div>

                    <div className="right">
                        <Image src="/developing.gif" alt="gif" height="400" width="400" color="red" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner
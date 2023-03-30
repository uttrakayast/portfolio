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
                                {/* Full Stack Mobile Developer 📱 */}
                                <Typewriter options={{
                                    strings: ['Flutter Mobile 📱 Developer', 'Full Stack Mobile 📱 Developer', 'Backend 👨🏼‍💻 Developer'],
                                    autoStart: true,
                                    loop: true,
                                }} />
                            </h1>
                        </div>
                        <h3 className='desc'>Hi, I&apos;m Umesh Kumar. A passionate Flutter Developer based at Delhi, India. 📍</h3>
                        <div className='profiles'>
                            <Link href="https://www.linkedin.com/in/its-umesh/" target="_blank">
                                <FaLinkedin className="social-logo linkedIn" fontSize="30px" />
                            </Link>
                            <Link href="https://github.com/Hon3y9718" target="_blank">
                                <FaGithub className="social-logo github" fontSize="30px" />
                            </Link>
                        </div>
                    </div>

                    <div className="right" style={{
                        // backgroundImage: "url('https://tenor.com/bDJQV.gif')",
                    }}>
                        <Image src="/developing.gif" alt="gif" height="400" width="400" color="red" />
                    </div>

                    {/* <div className='shape right' style={{
                        // backgroundImage: "url('public/profile.jpg')",
                    }}>

                    </div> */}
                </div>
            </div>
        </>
    )
}

export default HeroBanner
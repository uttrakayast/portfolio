import React from "react";

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Typewriter from "typewriter-effect";

var HeroBanner = () => {
    return (
        <>
            <div className="main">
                <div className='container'>
                    <div className="left">
                        <div className='title-text'>
                            <h1 className='hero-text'>
                                <Typewriter options={{
                                    strings: ['Full Stack Mobile Developer 📱'],
                                    autoStart: true,
                                    loop: true,
                                }} />
                            </h1>
                        </div>
                        <h3 className='desc'>Hi, I'm Umesh Kumar. A passionate Flutter Developer based at Delhi, India. 📍</h3>
                        <div className='profiles'>
                            <a href="https://www.linkedin.com/in/its-umesh/">
                                <FaLinkedin className="social-logo linkedIn" fontSize="30px" />
                            </a>
                            <a href="https://github.com/Hon3y9718">
                                <FaGithub className="social-logo github" fontSize="30px" />
                            </a>
                        </div>
                    </div>

                    <div className='shape right' style={{
                        // backgroundImage: "url('public/profile.jpg')",
                    }}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroBanner
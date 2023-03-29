import React from "react";
import Image from "next/image";

var Navbar = () => {
    return (
        <>
            <nav className="nav">
                <h3>
                <a href="/" className="logo">
                    umesh.me
                </a>
                </h3>
                <button className="hamburger">
                    <Image src="/menu-bar.png" width="30" height="30" ></Image>
                </button>
                <div
                    className="navigation-menu">
                    <ul>
                        <li>
                            <a href="/home">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/blog">Blog</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
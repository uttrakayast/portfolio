import React from "react";
import Image from "next/image";
import Link from "next/link";

var Navbar = () => {
    return (
        <>
            <nav className="nav">
                <h3>
                <Link href="/" className="logo">
                    umesh.me
                </Link>
                </h3>
                <button className="hamburger">
                    <Image src="/menu-bar.png" width="30" height="30" ></Image>
                </button>
                <div
                    className="navigation-menu">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="#about">About</Link>
                        </li>
                        <li>
                            <Link href="#blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
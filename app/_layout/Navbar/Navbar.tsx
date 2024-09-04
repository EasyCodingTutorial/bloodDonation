"use client"
import { useState } from 'react';
import styles from './Navbar.module.css'
import Link from 'next/link'


// For React  Icons
import { IoMdClose } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";


interface NavLinksTypes {
    LinkText: string,
    LinkTo: string,
}

const NavLink: NavLinksTypes[] = [
    {
        LinkText: "Home",
        LinkTo: "/",
    }, {
        LinkText: "About",
        LinkTo: "/",
    }, {
        LinkText: "Donate",
        LinkTo: "/",
    }, {
        LinkText: "Resources",
        LinkTo: "/",
    }, {
        LinkText: "Volunteer",
        LinkTo: "/",
    }, {
        LinkText: "Blog",
        LinkTo: "/",
    },
]

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleSlider = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={styles.Navbar}>
            <img src="/assets/logo.png" loading='lazy' alt="" className={styles.Logo} />

            <div className={styles.NavLinks}>
                {
                    NavLink.map(({ LinkText, LinkTo }) => (
                        <div key={LinkTo}>
                            <Link href={LinkTo}>{LinkText}</Link>
                        </div>
                    ))
                }
            </div>


            <CgMenuLeftAlt
                className={styles.MenuIcon}
                onClick={toggleSlider}
            />

            <div className={`${styles.Slider} ${isOpen ? styles.Open : ''}`}>
                <div className={styles.SliderContent}>
                    <IoMdClose
                        className={styles.CloseIcon}
                        onClick={toggleSlider}
                    />
                    <img src="/assets/logo.png" loading='lazy' alt="" />



                    {
                        NavLink.map(({ LinkText, LinkTo }) => (
                            <div key={LinkTo} className={styles.NormalLinkText}>
                                <Link href={LinkTo}>{LinkText}</Link>
                            </div>
                        ))
                    }

                </div>
            </div>



        </nav>
    )
}

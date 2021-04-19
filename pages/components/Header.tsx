import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"
import NavButton from "./NavButton"

import styles from '../../styles/Header.module.scss'
import React from "react"

const Header = () => {
    return (
        <header className={styles.Header}>
            <Link href="/">
                <a className={styles.HeaderLogo}>
                    <Image src={"/static/logo.svg"} alt="logo" width="70em" height="80px" />
                </a>
            </Link>
            
            <div className={styles.MenuButton}>
                <Menu />
            </div>
            

            <nav className={styles.HeaderNav}>
                <ul> 
                    <li><NavButton text={"HOME"} href={"/"}/></li>
                    <li><NavButton text={"PROJECTS"} href={"/projects"}/></li>
                    <li><NavButton text={"ABOUT"} href={"/about"}/></li>
                    <li><NavButton text={"CONTACT"} href={"/contact"}/></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"
import NavButton from "./NavButton"

import styles from '../../styles/Header.module.scss'
import { FaBars } from "react-icons/fa"
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
                <button onClick={() => {/* TODO */}}><FaBars size="3em"/></button>
                <Menu />
            </div>
            

            <nav className={styles.HeaderNav}>
                {/* UL LI STYLE AS FOOTER */}
                <NavButton text={"HOME"} href={"/"}/>
                <NavButton text={"PROJECTS"} href={"/projects"}/>
                <NavButton text={"ABOUT"} href={"/about"}/>
                <NavButton text={"CONTACT"} href={"/contact"}/>
            </nav>
        </header>
    )
}

export default Header
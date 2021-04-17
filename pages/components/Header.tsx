import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"
import NavButton from "./NavButton"

import styles from '../../styles/Header.module.scss'
import { FaBars } from "react-icons/fa"
import React from "react"

interface Props {
    isMenuOpen: Boolean,
}

const Header = ({isMenuOpen}: Props) => {
    return (
        <header className={styles.Header}>
            <Link href="/">
                <a className={styles.HeaderLogo}>
                    <Image src={"/static/logo.svg"} alt="logo" width="70em" height="80px" /> {/* TODO: fix svg changing font on other platforms */}
                </a>
            </Link>
            
            <div className={styles.MenuButton}>
                <button onClick={() => {/* TODO */}}><FaBars size="3em"/></button>
                <Menu isOpen={isMenuOpen}/>
            </div>
            

            <nav className={styles.HeaderNav}>
                {/* TODO: ul li same as footer */}
                <NavButton text={"HOME"} href={"/"}/>
                <NavButton text={"PROJECTS"} href={"/projects"}/>
                <NavButton text={"ABOUT"} href={"/about"}/>
                <NavButton text={"CONTACT"} href={"/contact"}/>
            </nav>
        </header>
    )
}

export default Header
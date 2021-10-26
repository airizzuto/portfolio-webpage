import React from "react"
import Link from "next/link"
import Menu from "./Menu"
import NavButton from "./NavButton"

import styles from '../../styles/Header.module.scss'

const Header = () => {
    return (
        <header className={styles.Header}>
            <Link href="/">
                <a className={styles.HeaderLogo}>
                    <label><span>AI</span>RIZZUTO</label>
                </a>
            </Link>

            <nav className={styles.HeaderNav}>
                <ul> 
                    <li><NavButton text={"HOME"} href={"/"}/></li>
                    <li><NavButton text={"PROJECTS"} href={"/projects"}/></li>
                    <li><NavButton text={"ABOUT"} href={"/about"}/></li>
                    <li><NavButton text={"CONTACT"} href={"/contact"}/></li>
                </ul>
            </nav>

            <div className={styles.MenuButton}>
                <Menu />
            </div>

        </header>
    )
}

export default Header
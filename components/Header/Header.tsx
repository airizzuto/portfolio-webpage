import React from "react"
import Link from "next/link"
import Menu from "./Menu"
import NavButton from "./NavButton"

import Style from '../../styles/Header.module.scss'

const Header = () => {
    return (
        <header className={Style.Header}>
            <Link href="/">
                <a className={Style.HeaderLogo}>
                    <label><span>AI</span>RIZZUTO</label>
                </a>
            </Link>

            <nav className={Style.HeaderNav}>
                <ul> 
                    <li><NavButton text={"HOME"} href={"/"}/></li>
                    <li><NavButton text={"PROJECTS"} href={"/projects"}/></li>
                    <li><NavButton text={"ABOUT"} href={"/about"}/></li>
                    <li><NavButton text={"CONTACT"} href={"/contact"}/></li>
                </ul>
            </nav>

            <div className={Style.MenuButton}>
                <Menu />
            </div>

        </header>
    )
}

export default Header
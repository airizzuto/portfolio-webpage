import React from "react"
import Link from "next/link"

import NavSections from "./NavSections";
import Menu from "./Menu"

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
                    <NavSections />
                </ul>
            </nav>

            <div className={Style.MenuButton}>
                <Menu />
            </div>

        </header>
    )
}

export default Header
import React from "react"
import Link from "next/link"

import Menu from "./Menu";
import LanguageSwitch from "./LanguageSwitch";
import NavSections from "./NavSections";

import Style from "../../styles/header/Header.module.scss";

const Header = () => {
    return (
        <header className={Style.Header}>
            <Link href="/">
                <a className={Style.HeaderLogo}>
                    <label><span>AI</span>RIZZUTO</label>
                </a>
            </Link>

            <nav className={Style.HeaderNav}>
                <NavSections />
            </nav>

            <div className={Style.RightOptions}>
                <LanguageSwitch />
            </div>

            <div className={Style.Menu}>
                <Menu />
            </div>

        </header>
    )
}

export default Header

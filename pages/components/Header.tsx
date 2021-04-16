import Image from "next/image"
import Link from "next/link"
import Menu from "./Menu"
import NavButton from "./NavButton"

import styles from '../../styles/Header.module.scss'
import { FaBars } from "react-icons/fa"

const Header = () => {
    return (
        <header className={styles.Header}>
            <Link href="/">
                <a className={styles.HeaderLogo}>
                    <Image src={"/static/logo.svg"} alt="logo" width="80px" height="80px" />
                </a>
            </Link>
            
            <menu>
                <Menu />
            </menu>
            {/* TODO: Menu button 
            <i><FaBars/></i>
            */}
            

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
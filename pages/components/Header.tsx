import Image from "next/image"
import styles from '../../styles/Header.module.scss'
import Link from "next/link"
import NavButton from "./NavButton"

const Header = () => {
    return (
        <header className={styles.Header}>
            <Link href="/">
                <a className={styles.HeaderLogo}>
                    <Image src={"/static/logo.svg"} alt="logo" width="80px" height="80px" />
                </a>
            </Link>

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
import HeaderButton from "./HeaderButton"
import Image from "next/image"
import styles from '../../styles/Header.module.scss'
import Link from "next/link"

const Header = () => {
    return (
        <header className={styles.Header}>
            <Link href="/">
                <a className={styles.HeaderLogo}>
                    <Image src={"/static/logo.svg"} alt="logo" width="80px" height="80px" />
                </a>
            </Link>

            <nav className={styles.HeaderNav}>
                <HeaderButton text={"HOME"} href={"/"}/>
                <HeaderButton text={"PROJECTS"} href={"/projects"}/>
                <HeaderButton text={"ABOUT"} href={"/about"}/>
                <HeaderButton text={"CONTACT"} href={"/contact"}/>
            </nav>
        </header>
    )
}

export default Header
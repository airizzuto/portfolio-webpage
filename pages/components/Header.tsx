import HeaderButton from "./HeaderButton"
import Image from "next/image"
import styles from './Header.module.scss'
import Link from "next/link"

export default function Header() {
    return (
        <header className={styles.Header}>
            <Link href="/">
                <a className={styles.HeaderLogo}>
                    <Image src={"/static/proto-logo-dark2.svg"} alt="logo" width="8rem" height="8rem" />
                </a>
            </Link>

            <nav className={styles.HeaderNav}>
                <HeaderButton text={"HOME"} urlPath={"/"}/>
                <HeaderButton text={"PROJECTS"} urlPath={"/projects"}/>
                <HeaderButton text={"ABOUT"} urlPath={"/about"}/>
                <HeaderButton text={"CONTACT"} urlPath={"/contact"}/>
            </nav>
        </header>
    )
}
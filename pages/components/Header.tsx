import NavButton from "./HeaderButton"
import Image from "next/image"
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.Header}>
            <Image className={styles.HeaderLogo} src={"/static/proto-logo-dark2.svg"} alt="logo" width="8rem" height="8rem" />
            
            <nav className={styles.HeaderNav}>
                <NavButton text={"HOME"} urlPath={"/"}/>
                <NavButton text={"PROJECTS"} urlPath={"/"}/>
                <NavButton text={"ABOUT"} urlPath={"/"}/>
                <NavButton text={"CONTACT"} urlPath={"/"}/>
            </nav>
        </header>
    )
}

export default Header;
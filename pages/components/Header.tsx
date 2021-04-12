import NavButton from "./HeaderButton"
import Image from "next/image"
import styles from './Header.module.scss'

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderLogo}>
                <Image src={"/pages/assets/proto-logo-dark2.svg"} layout="fill" alt="logo" />
            </div>
            
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
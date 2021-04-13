import FooterButton from "./FooterButton"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import styles from "./Footer.module.scss"

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <nav className={styles.FooterNav}>
                <FooterButton text={`Github`} icon={FaGithub} urlPath={"https://github.com/airizzuto"}/>
                <FooterButton text={"LinkedIn"} icon={FaLinkedin} urlPath={"/"}/>
                <FooterButton text={"Contact"} urlPath={"/contact"}/>
            </nav>
            <p className={styles.Copyright}>COPYRIGHT 2021 - AGUSTÍN IGNACIO RIZZUTO</p>
        </footer>
    )
}

import NavButton from "./NavButton"
import styles from "../../styles/Footer.module.scss"

 const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <nav className={styles.FooterNav}>
                <NavButton text={`Github`} href={"https://github.com/airizzuto"}/>
                <NavButton text={"LinkedIn"} href={"/"}/>
                <NavButton text={"Contact"} href={"/contact"}/>
            </nav>
            <p className={styles.Copyright}>AIRIZZUTO © 2021</p>
        </footer>
    )
}
export default Footer
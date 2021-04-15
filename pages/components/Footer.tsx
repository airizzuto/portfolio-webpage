import FooterButton from "./FooterButton"
import styles from "../../styles/Footer.module.scss"

 const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <nav className={styles.FooterNav}>
                <FooterButton text={`Github`} href={"https://github.com/airizzuto"}/>
                <FooterButton text={"LinkedIn"} href={"/"}/>
                <FooterButton text={"Contact"} href={"/contact"}/>
            </nav>
            <p className={styles.Copyright}>AIRIZZUTO © 2021</p>
        </footer>
    )
}
export default Footer
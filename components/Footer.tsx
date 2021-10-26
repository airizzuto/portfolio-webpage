import NavButton from "./Header/NavButton"
import {FaGithub, FaLinkedin} from "react-icons/fa"

import styles from "../styles/Footer.module.scss"

 const Footer = () => {
    return (
      <footer className={styles.Footer}>
        <nav className={styles.Nav}>
          <ul>
            <li>
              <NavButton
                text={`Github`}
                href={"https://github.com/airizzuto"}
              />
              <FaGithub className={styles.Icon} size={"1rem"} />
            </li>
            <li>
              <NavButton text={"LinkedIn"} href={"https://www.linkedin.com/in/airizzuto/"} />
              <FaLinkedin className={styles.Icon} size={"1rem"} />
            </li>
            <li>
              <NavButton text={"Contact"} href={"/contact"} />
            </li>
          </ul>
        </nav>
        <p className={styles.Copyright}>AIRIZZUTO © 2021</p>
      </footer>
    );
}
export default Footer
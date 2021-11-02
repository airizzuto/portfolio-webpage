import NavButton from "./Header/NavButton"
import useTranslation from "next-translate/useTranslation";

import {FaGithub, FaLinkedin} from "react-icons/fa"

import styles from "../styles/Footer.module.scss"

 const Footer = () => {
    const { t, lang } = useTranslation('footer');
    const githubLink = t("github.link");
    const contactLabel = t("contact.label");

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
              <NavButton text={"LinkedIn"} href={githubLink} />
              <FaLinkedin className={styles.Icon} size={"1rem"} />
            </li>
            <li>
              <NavButton text={contactLabel} href={"/contact"} />
            </li>
          </ul>
        </nav>
        <p className={styles.Copyright}>AIRIZZUTO © 2021</p>
      </footer>
    );
}
export default Footer
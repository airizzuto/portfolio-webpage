import useTranslation from "next-translate/useTranslation";
import {FaGithub, FaLinkedin} from "react-icons/fa"

import NavButton from "./header/NavButton";

import styles from "../styles/Footer.module.scss"

 const Footer = () => {
    const { t, lang } = useTranslation('footer');
    const githubLink = t("github.link");
    const contactLabel = t("contact.label");

    return (
      <footer className={styles.Footer}>
        <nav className={styles.Nav}>
          <ul>
            <NavButton
              text={`Github`}
              href={"https://github.com/airizzuto"}
              icon={<FaGithub className={styles.Icon} size={"1rem"} />}
            />
            <NavButton 
              text={"LinkedIn"} 
              href={githubLink} 
              icon={<FaLinkedin className={styles.Icon} size={"1rem"} />}
            />
            <NavButton text={contactLabel} href={"/contact"} />
          </ul>
        </nav>
        <p className={styles.Copyright}> © 2020-2022 AIRIZZUTO</p>
      </footer>
    );
}
export default Footer
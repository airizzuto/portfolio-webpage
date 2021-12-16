import useTranslation from "next-translate/useTranslation";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"

import NavButton from "./header/NavButton";

import Styles from "../styles/Footer.module.scss"

 const Footer = () => {
    const { t, lang } = useTranslation('footer');
    const githubLink = t("github.link");
    const contactLabel = t("contact.label");

    return (
      <footer className={Styles.Footer}>
        <nav className={Styles.Nav}>
          <ul>
            <NavButton
              text={`Github`}
              href={"https://github.com/airizzuto"}
              icon={<FaGithub className={Styles.Icon} size={"1rem"} />}
            />
            <NavButton 
              text={"LinkedIn"} 
              href={githubLink} 
              icon={<FaLinkedin className={Styles.Icon} size={"1rem"} />}
            />
            <NavButton 
              text={"Twitter"}
              href={"https://twitter.com/airizzuto"}
              icon={<FaTwitter className={Styles.Icon} size={"1rem"} />}
            />
            <NavButton text={contactLabel} href={"/contact"} />
          </ul>
        </nav>
        <p className={Styles.Copyright}> © 2020-2022 AIRIZZUTO</p>
      </footer>
    );
}
export default Footer
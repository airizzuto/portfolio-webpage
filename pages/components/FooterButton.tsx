import { IconType } from "react-icons/lib";

import styles from "./FooterButton.module.scss"

interface Props {
    text: String;
    urlPath: string; 
    icon?: IconType;
}

const FooterButton = ({text, urlPath, icon}: Props) => {
    return (
        <a className={styles.FooterButton} href={urlPath} >
            {text} {icon}
        </a>
    )
}

export default FooterButton;
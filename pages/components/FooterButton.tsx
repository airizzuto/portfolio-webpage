import Link from "next/link";
import { IconType } from "react-icons/lib";

import styles from "./FooterButton.module.scss"

interface Props {
    text: String;
    urlPath: string; 
    icon?: IconType;
}

const FooterButton = ({text, urlPath, icon}: Props) => {
    return (
        <>
            <Link href={urlPath}>
                <a className={styles.FooterButton} >
                    {text} {icon}
                </a>
            </Link>
        </>
    )
}

export default FooterButton;
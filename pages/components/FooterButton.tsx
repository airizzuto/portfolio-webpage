import Link from "next/link";
import styles from "./FooterButton.module.scss"

interface Props {
    text: String;
    urlPath: string; 
}

const FooterButton = ({text, urlPath}: Props) => {
    return (
        <>
            <Link href={urlPath}>
                <a className={styles.FooterButton} >
                    {text} {/* TODO: Icon */}
                </a>
            </Link>
        </>
    )
}

export default FooterButton;
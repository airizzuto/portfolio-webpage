import Link from "next/link";
import styles from "../../styles/FooterButton.module.scss"

interface Props {
    text: String
    href: string
}

const FooterButton = ({text, href}: Props) => {
    return (
        <Link href={`url(${href})`} passHref>
            <a className={styles.FooterButton} >
                {text} {/* TODO: Icon */}
            </a>
        </Link>
    )
}

export default FooterButton
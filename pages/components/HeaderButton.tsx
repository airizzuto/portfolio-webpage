import Link from "next/link"
import styles from "../../styles/HeaderButton.module.scss"

interface Props {
    text: String
    href: string
}

const HeaderButton = ({text, href} : Props) => {
    return (
        <Link href={`url(${href})`} passHref>
            <a className={styles.HeaderButton}>{text}</a>
        </Link>
    )
}

export default HeaderButton
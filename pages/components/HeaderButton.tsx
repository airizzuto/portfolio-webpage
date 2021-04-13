import Link from "next/link"
import styles from "./HeaderButton.module.scss"

interface Props {
    text: String
    urlPath: string
}

const HeaderButton = ({text, urlPath} : Props) => {
    return (
        <>
            <Link href={urlPath}>
                <a className={styles.HeaderButton}>{text}</a>
            </Link>
        </>
    )
}

export default HeaderButton;
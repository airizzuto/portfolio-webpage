import React from "react"
import styles from "./HeaderButton.module.scss"

interface Props {
    text: String
    urlPath: string
}

const HeaderButton = ({text, urlPath} : Props) => {
    return (
        <a className={styles.HeaderButton} href={urlPath}>
            {text}
        </a>
    )
}

export default HeaderButton;
import styles from "../../styles/ContentDisplay.module.scss"
import Content from "./Content"

interface Props {
    content: Content;
}
const ContentDisplay = ({content}: Props) => {
    // TODO: create separate components with html structures for different contents types
    return (
        <div className={styles.Content} 
            style={{
                backgroundImage: `url(${content.imagePath})`
            }}>
            <h3 className={styles.Title}>{content.title}</h3>
            <div className={styles.Info}>
                {Array.isArray(content.info) 
                    ? content.info.map(paragraph => {
                        return <p>{paragraph}</p>})
                    : <p>{content.info}</p>
                }
            </div>
        </div>
    )
}

export default ContentDisplay
import styles from "../../styles/Content.module.scss"

interface Props {
    title: String;
    text: string[];
    imageSrc: string;
}

const Content = ({title, text, imageSrc}: Props) => {
    return (
        <div className={styles.Content} 
            style={{
                backgroundImage: `url(${imageSrc})`
            }}>
            <h3 className={styles.Title}>{title}</h3>
            <div className={styles.Info}>
                {text && text.map(paragraph => {
                    return <p>{paragraph}</p>
                })}
            </div>
        </div>
    )
}

export default Content
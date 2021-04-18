import styles from "../../styles/Content.module.scss"

interface Props {
    title: String;
    text: string[] | String;
    imageSrc: string;
}

// TODO: Content object

const Content = ({title, text, imageSrc}: Props) => {

    
    return (
        <div className={styles.Content} 
            style={{
                backgroundImage: `url(${imageSrc})`
            }}>
            <h3 className={styles.Title}>{title}</h3>
            <div className={styles.Info}>
                {Array.isArray(text) 
                    ? text.map(paragraph => {
                        return <p>{paragraph}</p>})
                    : <p>{text}</p>
                }
            </div>
        </div>
    )
}

export default Content
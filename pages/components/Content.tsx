import styles from "./Content.module.scss"

interface Props {
    title: String;
    text: Array<string>;
    imageSrc: string;
}

const Content = ({title, text, imageSrc}: Props) => {

    return (
        <div className={styles.Content}>
            <style jsx>
                {`
                    .Content {
                        background-image: url(${imageSrc});
                    }
                `}
            </style>
            <h3 className={styles.Title}>{title}</h3>
            <div className={styles.Info}>
                {text.map((paragraph) => {
                    return <p>{paragraph}</p>
                })}
            </div>
            
        </div>
    )
}

export default Content;
import Content from "../../models/Content"
import styles from "../../styles/ContentDisplay.module.scss"

const ProjectContent = ({title, text, image}: Content) => {
  return (
      <div 
        className={styles.Container} 
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={styles.Content}>
          <h3 className={styles.Title}>{title}</h3>
          <div className={styles.Text}>
            {Array.isArray(text) 
                ? text.map(paragraph => {
                    return <p>{paragraph}</p>
                  })
                : <p>{text}</p>
            }
          </div>
        </div>
      </div>
  )
}

export default ProjectContent
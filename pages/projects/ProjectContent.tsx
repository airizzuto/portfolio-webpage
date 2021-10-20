import React, { ReactElement } from "react";
import Style from "../../styles/ContentDisplay.module.scss"

export type Content = {
  image: string;
  children: ReactElement[] | undefined;
}

const ProjectContent: React.FC<Content> = ({image, children}) => {
  return (
      <div 
        className={Style.Container} 
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={Style.Background}>
          {/* <h1 className={styles.Title}>{title}</h1>
          <div className={styles.Text}>
            {Array.isArray(text) 
                ? text.map(paragraph => {
                    return <p>{paragraph}</p>
                  })
                : <p>{text}</p>
            }
          </div> */}
          <div className={Style.Content}>
            {children}
          </div>
        </div>
      </div>
  )
}

export default ProjectContent
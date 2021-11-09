import React, { ReactElement } from "react";
import Style from "../../styles/ContentDisplay.module.scss"

export type Content = {
  image?: string;
  children: ReactElement[] | undefined;
}

// TODO - Content alternate style (text aligned right || contrasting theme)
const ContentWrapper: React.FC<Content> = ({image, children}) => {
  return (
      <div 
        className={Style.Container} 
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={Style.Background}>
          <div className={Style.Content}>
            {children}
          </div>
        </div>
      </div>
  )
}

export default ContentWrapper;

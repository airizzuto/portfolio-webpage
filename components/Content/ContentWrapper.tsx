import React, { ReactComponentElement, ReactElement } from "react";

import ContentCard from "./ContentCard";
import ContentDetailed from "./ContentDetailed";

import Style from "../../styles/ContentDisplay.module.scss";

interface Props {
  image?: string;
  children: ReactElement | ReactElement[] | undefined;
}

// TODO - Content alternate style (text aligned right || contrasting theme)
const ContentWrapper: React.FC<Props> = ({image, children}) => {
  return (
      <div 
        className={Style.Container} 
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className={Style.Background}>
            {children}
        </div>
      </div>
  )
}

export default ContentWrapper;

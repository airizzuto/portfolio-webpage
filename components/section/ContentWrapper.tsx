import React, { ReactElement } from "react";

import Style from "../../styles/content/ContentWrapper.module.scss";

type BackgroundOpacity = "left" | "right" | "full" | "none";

interface Props {
  image?: string;
  children: ReactElement | ReactElement[] | undefined;
  backgroundOpacity?: BackgroundOpacity;
}

const opacityOptions = {
  left: { background: "linear-gradient(90deg, rgba(0,0,0,0.90) 10%, rgba(0,0,0,0) 100%)" },
  right: { background: "linear-gradient(270deg, rgba(0,0,0,0.90) 10%, rgba(0,0,0,0) 100%)"},
  full: { background: "rgba(0,0,0,0.5)" },
  none: { background: "none" }
}

/**
 * Full page wrapper
 * @param image image name
 * @param {BackgroundOpacity} backgroundOpacity default="none" options="left | right | full"
 */
const ContentWrapper: React.FC<Props> = ({image, children, backgroundOpacity="none"}) => {
  return (
      <div 
        className={Style.Container} 
        style={{
          backgroundImage: `url(/static/${image})`,
        }}
      >
        <div className={Style.Background} style={opacityOptions[backgroundOpacity]}>
            {children}
        </div>
      </div>
  )
}

export default ContentWrapper;

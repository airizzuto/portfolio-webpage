import React, { ReactElement } from "react";

import Style from "../../styles/content/ContentWrapper.module.scss";

interface Props {
  image?: string;
  children: ReactElement | ReactElement[] | undefined;
  backgroundOpacity?: "opacityLeft" | "opacityRight" | "full" | "none";
}

const opacityOptions = {
  opacityLeft: { background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)" },
  opacityRight: { background: "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)"},
  full: { background: "rgba(0,0,0,0.5)" },
  none: { background: "none" }
}

// TODO - Content alternate style (text aligned right || contrasting theme)
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

import React, { ReactElement } from 'react';

import Style from "../../styles/content/ContentDetailed.module.scss";

interface Props {
  children: ReactElement[] | ReactElement | undefined;
  backgroundOpacity?: "opacityLeft" | "opacityRight" | "full" | "none";
}

const opacityOptions = {
  opacityLeft: { background: "linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(0,0,0,0) 100%)" },
  opacityRight: { background: "linear-gradient(270deg, rgba(0,0,0,1) 1%, rgba(0,0,0,0) 100%)"},
  full: { background: "rgba(0,0,0,0.5)" },
  none: { background: "none" }
}



const ContentDetailed: React.FC<Props> = ({children, backgroundOpacity="none"}) => {
  return (
    <div className={Style.Content} style={opacityOptions[backgroundOpacity]}>
      {children}
    </div>
  );
}

export default ContentDetailed;

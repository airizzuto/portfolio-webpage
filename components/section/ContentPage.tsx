import React, { ReactElement } from 'react';

import Style from "../../styles/content/ContentPage.module.scss";

type ContentAlignment = "left" | "center" | "right";

interface Props {
  children: ReactElement[] | ReactElement | undefined;
  contentAlignment?: ContentAlignment;
}

const alignContent = {
  left: { 
    gridArea: "left",
  },
  center: { 
    gridArea: "left right",
  },
  right: { 
    gridArea: "right",
  }
}

/**
 * Content page wrapper
 * @param {AlignSetting} contentAlignment default="left" options="left | center | right"
 * @returns 
 */
const ContentPage: React.FC<Props> = ({children, contentAlignment="left"}) => {
  return (
    <div className={Style.Container}>
      <div className={Style.Content}
        style={alignContent[contentAlignment]}
      >
        {children}
      </div>
    </div>
  );
}

export default ContentPage;

import React, { ReactElement } from 'react';

import Style from "../../styles/content/ContentPage.module.scss";

type ContentAlignment = "left" | "right";

interface Props {
  children: ReactElement[] | ReactElement | undefined;
  contentAlignment?: ContentAlignment;
}

const alignContent = {
  left: { left: "0" },
  right: { left: "50vw" }
}

{/* TODO: content alignment: left | right | center*/}
const ContentPage: React.FC<Props> = ({children, contentAlignment="left"}) => {
  return (
    <div className={Style.Content}
      style={alignContent[contentAlignment]}
    >
      {children}
    </div>
  );
}

export default ContentPage;

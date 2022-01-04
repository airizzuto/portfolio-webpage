import React, { ReactElement } from 'react';

import Style from "../../styles/content/ContentMosaic.module.scss";

interface Props {
  children: ReactElement[] | undefined;
}

const ContentMosaic: React.FC<Props> = ({children}) => {
  return (
    <div className={Style.Mosaic}>
      {children}
    </div>
  );
}

export default ContentMosaic;

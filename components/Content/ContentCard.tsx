import React, { ReactElement } from 'react';

import Style from "../../styles/ContentDisplay.module.scss";

interface Props {
  children: ReactElement[] | undefined;
}

const ContentCard: React.FC<Props> = ({children}) => {
  return (
    <div className={Style.Mosaic}>
      {children}
    </div>
  );
}

export default ContentCard;

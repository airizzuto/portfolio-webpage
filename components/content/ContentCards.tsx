import React, { ReactElement } from 'react';

import Style from "../../styles/content/ContentCard.module.scss";

interface Props {
  children: ReactElement[] | undefined;
}

const ContentCards: React.FC<Props> = ({children}) => {
  return (
    <div className={Style.Mosaic}>
      {children}
    </div>
  );
}

export default ContentCards;

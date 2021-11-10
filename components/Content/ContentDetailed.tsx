import React, { ReactElement } from 'react';

import Style from "../../styles/ContentDisplay.module.scss";

interface Props {
  children: ReactElement[] | undefined;
}

const ContentDetailed: React.FC<Props> = ({children}) => {
  return (
    <div className={Style.Content}>
      {children}
    </div>
  );
}

export default ContentDetailed;

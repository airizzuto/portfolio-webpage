import React, { ReactElement } from 'react';

import Style from "../../styles/content/ContentPage.module.scss";

interface Props {
  children: ReactElement[] | ReactElement | undefined;
}

const ContentPage: React.FC<Props> = ({children}) => {
  return (
    <div className={Style.Content}>
      {children}
    </div>
  );
}

export default ContentPage;

import React, { ReactElement } from 'react';
import Style from '../../styles/content/ContentList.module.scss';

interface Props {
  children: ReactElement[] | undefined;
}

// TODO: REMOVE - https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics
const ContentList: React.FC<Props> = ({children}) => {
  return (
    <table className={Style.Table}>
      <thead className={Style.Header}>
        <th>Project</th>
        <th>Technologies</th>
        <th>Website</th>
      </thead>
      <tbody className={Style.Body}>
        {children}
      </tbody>
    </table>
  );
}

export default ContentList;

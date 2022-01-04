import React, { ReactElement } from 'react'

import Style from "../../styles/card/CardWrapper.module.scss";

interface Props {
  imagePath: string;
  children: ReactElement[] | ReactElement | undefined;
}

const CardWrapper: React.FC<Props> = ({children, imagePath}) => {
  return (
    <div 
      className={Style.Container}
      style={{
        backgroundImage: `url(/static/${imagePath})`,
      }}
    >
      <div className={Style.Background}>
        {children}
      </div>
    </div>
  );
}

export default CardWrapper;

import React from 'react'
import useTranslation from 'next-translate/useTranslation';

import ContentLink from '../../components/content/ContentLinks';

import Style from "../../styles/content/ContentCard.module.scss";

interface Props {
  imagePath: string;
  projectName: string;
}

const FCCProject: React.FC<Props> = ({projectName, imagePath}) => {
  const { t, lang } = useTranslation(`projects`);
  const title = t(`${projectName}.title`);
  const description = t(`${projectName}.description`);
  const link = t(`${projectName}.codepen`);

  return (
    <div 
      className={Style.Container}
      style={{
        backgroundImage: `url(/static/${imagePath})`,
      }}
    >
      <div className={Style.Background}>
        <h1 className={Style.Title}>
          {title}
        </h1>

        <p className={Style.Text}>
          {description}
        </p>

        <div className={Style.Link}>
          <ContentLink label={"Codepen"} href={link} />
        </div>
      </div>
    </div>
  );
}

export default FCCProject;

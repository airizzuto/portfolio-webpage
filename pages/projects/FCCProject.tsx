import React from 'react'
import useTranslation from 'next-translate/useTranslation';

import ContentWrapper from '../../components/Content/ContentWrapper';
import ContentLink from '../../components/Content/ContentLinks';

import Style from "../../styles/ContentDisplay.module.scss";

interface Props {
  imagePath: string;
  projectName: string;
}

const FCCProject: React.FC<Props> = ({projectName, imagePath}) => {
  const { t, lang } = useTranslation(`projects`);
  const title = t(`ffc-fe-cert.${projectName}.title`);
  const link = t(`ffc-fe-cert.${projectName}.codepen`);

  return (
    <div 
      className={Style.Project}
      style={{
        backgroundImage: `url(${imagePath})`,
      }}
    >
      <h1 className={Style.ProjectTitle}>{title}</h1>

      <div className={Style.Link}>
        <ContentLink label={"Codepen"} href={link} />
      </div>
    </div>
  );
}

export default FCCProject;

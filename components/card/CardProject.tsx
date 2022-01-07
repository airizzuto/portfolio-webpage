import React from 'react'
import useTranslation from 'next-translate/useTranslation';

import LabeledLink from '../LabeledLink';

import Style from "../../styles/card/CardProject.module.scss";

interface Props {
  projectName: string;
}

const CardProject: React.FC<Props> = ({projectName}) => {
  const { t, lang } = useTranslation(`projects`);
  const title = t(`${projectName}.title`);
  const description = t(`${projectName}.description`);
  const link = t(`${projectName}.codepen`);

  return (
      <div className={Style.Container}>
        <h1 className={Style.Title}>
          {title}
        </h1>

        <p className={Style.Text}>
          {description}
        </p>

        <div className={Style.Link}>
          <LabeledLink label={"Codepen"} href={link} />
        </div>
      </div>
  );
}

export default CardProject;

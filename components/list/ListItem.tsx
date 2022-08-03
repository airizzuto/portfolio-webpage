import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import LabeledLink from '../LabeledLink';
import Style from "../../styles/content/ContentList.module.scss";

interface Props {
  projectName: string;
  technologies: string[];
  website: string;
  link: string;
}

const ListItem: React.FC<Props> = ({projectName, technologies, website, link}) => {
  const { t, lang } = useTranslation(`projects`);
  const name = t(`${projectName}.name`);

  return (
    <tr className={Style.ItemRow} key={projectName}>
      <td>{name}</td>
      <td>
        {technologies.map((tech) =>
          { return <ul key={projectName + "-" + tech}>{tech}</ul> })
        }
      </td>
      <td>
        <LabeledLink label={website} href={link} />
      </td>
    </tr>
  )
}

export default ListItem
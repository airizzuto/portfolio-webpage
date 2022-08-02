import React from 'react';
import LabeledLink from '../LabeledLink';
import Style from "../../styles/content/ContentList.module.scss";

interface Props {
  projectName: string;
  technologies: string[];
  website: string;
  link: string;
}

const ListItem: React.FC<Props> = ({projectName, technologies, website, link}) => {
  return (
    <tr className={Style.ItemRow} key={projectName}>
      <td>{projectName}</td>
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
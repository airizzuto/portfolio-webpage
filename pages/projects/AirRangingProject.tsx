import React from 'react'
import ProjectContent from './ProjectContent';

import Style from "../../styles/ContentDisplay.module.scss";
import Link from 'next/link';

const AirRangingProject = () => {
  return (
    <ProjectContent image={'static/AirRangingMap.png'}>
      <h1 className={Style.Title}>
        Air Ranging Web Application
      </h1>
      <div className={Style.Text}>
        <p>Web application for flight fuel planning, with aircraft management and user account.</p>
        <p>WebAPI created using .NET and Entity Framework.</p>
        <p>Database using PostgreSQL.</p>
        <p>Frontend developed with React, Typescript and Sass.</p>
      </div>

      {/* TODO: abstract */}
      <div className={Style.Links}>
        <label>
          Web Page:
          <Link href={"#"}>
            WIP
          </Link>
        </label>
        <label>
          Github:
          <Link href={"https://github.com/airizzuto/AirRanging/"}>
            https://github.com/airizzuto/AirRanging/
          </Link>
        </label>
      </div>
    </ProjectContent>
  )
}

export default AirRangingProject

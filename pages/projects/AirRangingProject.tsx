import React from 'react'
import useTranslation from 'next-translate/useTranslation';

import ContentWrapper from '../../components/Content/ContentWrapper';
import ContentLink from '../../components/Content/ContentLinks';

import Style from "../../styles/ContentDisplay.module.scss";

const AirRangingProject = () => {
  const { t, lang } = useTranslation('projects:air-ranging');
  const title = t("title");
  const content: string[] = t("content", {}, {returnObjects: true} );
  const webLabel = t("links.web");

  // TODO: insert translation
  return (
    <ContentWrapper image={'static/AirRangingMap.png'}>
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
        <ContentLink label={"Web Page"} href={"https://airizzutodeveloper.vercel.app/"} />
        <ContentLink label={"Github"} href={"https://github.com/airizzuto/AirRanging/"} />
      </div>
    </ContentWrapper>
  )
}

export default AirRangingProject

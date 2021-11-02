import React from 'react'
import useTranslation from 'next-translate/useTranslation';

import ContentWrapper from '../../components/Content/ContentWrapper';
import ContentLink from '../../components/Content/ContentLinks';

import Style from "../../styles/ContentDisplay.module.scss";

const AirRangingProject = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("air-ranging.title");
  const content = [...t("air-ranging.content", {}, {returnObjects: true})];
  const webLabel = t("links.web");

  return (
    <ContentWrapper image={'static/AirRangingMap.png'}>
      <h1 className={Style.Title}>{title}</h1>

      <div className={Style.Text}>
        {content.map((text, idx) => {
          return <p key={`porfolio-text-${idx}`}>{text}</p>
        })}
      </div>

      <div className={Style.Links}>
        <ContentLink label={"Web"} href={"https://airizzutodeveloper.vercel.app/"} />
        <ContentLink label={"Github"} href={"https://github.com/airizzuto/AirRanging/"} />
      </div>
    </ContentWrapper>
  )
}

export default AirRangingProject

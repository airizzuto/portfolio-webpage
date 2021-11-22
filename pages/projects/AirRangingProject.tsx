import React from 'react'
import useTranslation from 'next-translate/useTranslation';

import ContentWrapper from '../../components/Content/ContentWrapper';
import ContentLink from '../../components/Content/ContentLinks';
import ContentDetailed from '../../components/Content/ContentDetailed';

import Style from "../../styles/ContentDetailed.module.scss";

const AirRangingProject = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("air-ranging.title");
  const content = [...t("air-ranging.content", {}, {returnObjects: true})];
  const webLabel = t("links.web");

  return (
    <ContentWrapper image={'static/AirRangingMap.png'}>
      <ContentDetailed>
        <h1 className={Style.Title}>{title}</h1>

        <div className={Style.Text}>
          {content.map((text, idx) => {
            return <p key={`porfolio-text-${idx}`}>{text}</p>
          })}
        </div>

        <div className={Style.Links}>
          <ContentLink label={"Web"} href={""} />
          <ContentLink label={"Github"} href={"https://github.com/airizzuto/AirRanging/"} />
        </div>
      </ContentDetailed>
    </ContentWrapper>
  )
}

export default AirRangingProject

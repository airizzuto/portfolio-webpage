import React from 'react'
import useTranslation from 'next-translate/useTranslation';

import ContentWrapper from '../../components/section/ContentWrapper';
import LabeledLink from '../../components/LabeledLink';
import ContentPage from '../../components/section/ContentPage';

import Style from "../../styles/content/ContentPage.module.scss";

const AirRangingProject = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("air-ranging.title");
  const content = [...t("air-ranging.content", {}, {returnObjects: true})];
  const webLabel = t("air-ranging.links.web");

  return (
    <ContentWrapper image={'AirRangingMap.png'} backgroundOpacity={"opacityLeft"}>
      <ContentPage>
        <p className={Style.Category}>Project</p>
        <h1 className={Style.Title}>{title}</h1>

        <div className={Style.Text}>
          {content.map((text, idx) => {
            return <p key={`porfolio-text-${idx}`}>{text}</p>
          })}
        </div>

        <div className={Style.Links}>
          <LabeledLink label={webLabel} href={""} />
          <LabeledLink label={"Github"} href={"https://github.com/airizzuto/AirRanging/"} />
        </div>
      </ContentPage>
    </ContentWrapper>
  )
}

export default AirRangingProject

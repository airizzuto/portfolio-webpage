import React from 'react'
import useTranslation from 'next-translate/useTranslation';

import ContentWrapper from '../../components/Content/ContentWrapper';
import ContentLink from '../../components/Content/ContentLinks';

import Style from "../../styles/ContentDisplay.module.scss";

const PortfolioProject = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("portfolio.title");
  const content = [...t("portfolio.content", {}, {returnObjects: true})];
  const webLabel = t("links.web");

  return (
    <ContentWrapper image={"static/tianyi-ma.jpg"}>
      <h1 className={Style.Title}>{title}</h1>

      <div className={Style.Text}>
        {content.map((text, idx) => {
          return <p key={`porfolio-text-${idx}`}>{text}</p>
        })}
      </div>

      <div className={Style.Links}>
        <ContentLink 
          label={"Github"}
          href={"https://github.com/airizzuto/portfolio-webpage-template"}
        />
      </div>
    </ContentWrapper>
  )
}

export default PortfolioProject

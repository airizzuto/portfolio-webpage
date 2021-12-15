import React from 'react'
import useTranslation from 'next-translate/useTranslation';

import ContentWrapper from '../../components/content/ContentWrapper';
import ContentLink from '../../components/content/ContentLinks';
import ContentDetailed from '../../components/content/ContentDetailed';
import ScrollArrow from '../../components/ScrollArrow';

import Style from "../../styles/content/ContentDetailed.module.scss";

const PortfolioProject = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("portfolio.title");
  const content = [...t("portfolio.content", {}, {returnObjects: true})];
  const webLabel = t("portfolio.links.web");

  return (
    <ContentWrapper image={"christian-wiediger-WkfDrhxDMC8-unsplash.jpg"}>
      <ContentDetailed>
        <p className={Style.Category}>Project</p>
        <h1 className={Style.Title}>{title}</h1>
        <div className={Style.Text}>
          {content.map((text, idx) => {
            return <p key={`porfolio-text-${idx}`}>{text}</p>
          })}
        </div>
        <div className={Style.Links}>
          <ContentLink label={webLabel} href={"https://airizzutodeveloper.vercel.app/"} />
          <ContentLink
            label={"Github"}
            href={"https://github.com/airizzuto/portfolio-webpage-template"}
          />
        </div>
      </ContentDetailed>
      <ScrollArrow />
    </ContentWrapper>
  )
}

export default PortfolioProject

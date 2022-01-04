import React from 'react'
import useTranslation from 'next-translate/useTranslation';

import ContentWrapper from '../../components/section/ContentWrapper';
import LabeledLink from '../../components/LabeledLink';
import ContentPage from '../../components/section/ContentPage';

import Style from "../../styles/content/ContentPage.module.scss";

const PortfolioProject = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("portfolio.title");
  const content = [...t("portfolio.content", {}, {returnObjects: true})];
  const webLabel = t("portfolio.links.web");

  return (
    <ContentWrapper image={"polygon-scatter-haikei.svg"}>
      <ContentPage>
        <p className={Style.Category}>Project</p>
        <h1 className={Style.Title}>{title}</h1>
        <div className={Style.Text}>
          {content.map((text, idx) => {
            return <p key={`porfolio-text-${idx}`}>{text}</p>
          })}
        </div>
        <div className={Style.Links}>
          <LabeledLink label={webLabel} href={"https://airizzutodeveloper.vercel.app/"} />
          <LabeledLink
            label={"Github"}
            href={"https://github.com/airizzuto/portfolio-webpage-template"}
          />
        </div>
      </ContentPage>
    </ContentWrapper>
  )
}

export default PortfolioProject

import useTranslation from "next-translate/useTranslation";
import React from "react";

import ContentPage from "../components/section/ContentPage";
import ContentWrapper from "../components/section/ContentWrapper";
import ScrollArrow from "../components/ScrollArrow";

import Style from "../styles/content/ContentPage.module.scss";

export default function Landing() {
  const { t, lang } = useTranslation('home');
  const title = t("content_title");
  const subtitle = t("content_subtitle");
  const content = [...t("content_text", {}, {returnObjects: true})];

  return (
    <ContentWrapper image={"polygon-scatter-haikei.svg"}>
      <ContentPage >
        <h1 className={Style.Title}>{title}</h1>
        <h2 className={Style.Subtitle}>{subtitle}</h2>
        <div className={Style.Text}>
          {content.map((text, idx) => {
            return <p key={`home--text-${idx}`}>{text}</p>
          })}
        </div>
      </ContentPage>
      <ScrollArrow />
    </ContentWrapper>
  )
}

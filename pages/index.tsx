import useTranslation from "next-translate/useTranslation";

import ContentWrapper from "../components/Content/ContentWrapper";

import Style from "../styles/ContentDisplay.module.scss";

export default function Home() {
  const { t, lang } = useTranslation('home');
  const title = t("content_title");
  const subtitle = t("content_subtitle");
  const text = t("content_text", {}, {returnObjects: true} );

  return (
    <ContentWrapper image={"static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"}>
      <h1 className={Style.Title}>{title}</h1>
      <h2 className={Style.SubTitle}>{subtitle}</h2>
      <p className={Style.Text}>
        {text[0]}
      </p>
      <p className={Style.Text}>
        {text[1]}
      </p>
    </ContentWrapper>
  )
}

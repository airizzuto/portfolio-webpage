import useTranslation from "next-translate/useTranslation";

import ContentWrapper from "../components/Content/ContentWrapper";

import Style from "../styles/ContentDisplay.module.scss";

export default function Home() {
  const { t, lang } = useTranslation('home');
  const title = t("content_title");
  const subtitle = t("content_subtitle");
  const content: string[] = t("content_text", {}, {returnObjects: true} );

  return (
    <ContentWrapper image={"static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"}>
      <h1 className={Style.Title}>{title}</h1>
      <h2 className={Style.SubTitle}>{subtitle}</h2>
      <div className={Style.Text}>
        {content.map((text, idx) => {
          return <p key={`home--text-${idx}`}>{text}</p>
        })}
      </div>
    </ContentWrapper>
  )
}

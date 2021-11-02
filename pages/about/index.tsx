
import useTranslation from "next-translate/useTranslation";

import Style from "../../styles/ContentDisplay.module.scss";

export default function About() {
  const { t, lang } = useTranslation('about');
  const title = t("content_title");
  const content = [...t("content_text", {}, {returnObjects: true})];

  return (
    <div className={Style.Container}
    style={{
      backgroundImage: `url(${"static/nihon-graphy.jpg"})`
    }}
  >
    <div className={Style.Background}>
      <h1 className={Style.Title}>{title}</h1>
      <div className={Style.Text}>
        {content.map((text, idx) => {
          return <p key={`about-text-${idx}`}>{text}</p>
        })}
      </div>
    </div>
  </div>
  )
}

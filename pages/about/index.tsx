
import useTranslation from "next-translate/useTranslation";

import Style from "../../styles/ContentDisplay.module.scss";

export default function About() {
  const { t, lang } = useTranslation('about');
  const title = t("content_title");
  const text = t("content_text", {}, {returnObjects: true} );

  return (
    <div className={Style.Container}
    style={{
      backgroundImage: `url(${"static/nihon-graphy.jpg"})`
    }}
  >
    <div className={Style.Background}>
      <h1 className={Style.Title}>{title}</h1>
      <div className={Style.Text}>
        <p>
          {text[0]}
        </p>
        <p>
          {text[1]}
        </p>
        <p>
          {text[2]}
        </p>
        <p>
          {text[3]}
        </p>
      </div>
    </div>
  </div>
  )
}

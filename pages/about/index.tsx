
import useTranslation from "next-translate/useTranslation";
import ContentDetailed from "../../components/content/ContentDetailed";
import ContentWrapper from "../../components/content/ContentWrapper";

import Style from "../../styles/content/ContentDetailed.module.scss";

export default function About() {
  const { t, lang } = useTranslation('about');
  const title = t("content_title");
  const content = [...t("content_text", {}, {returnObjects: true})];

  return (
    <ContentWrapper image={"IMG_20181226_155827.jpg"}>
      <ContentDetailed>
        <h1 className={Style.Title}>{title}</h1>

        <div className={Style.Text}>
          {content.map((text, idx) => {
            return <p key={`about-text-${idx}`}>{text}</p>
          })}
        </div>
      </ContentDetailed>
    </ContentWrapper>
  );
}

import React from 'react'
import useTranslation from "next-translate/useTranslation";

import ContentWrapper from '../../components/section/ContentWrapper';
import ContentPage from '../../components/section/ContentPage';

import Content from "../../styles/content/ContentPage.module.scss";
import ContentList from '../../components/section/ContentList';
import ListItem from '../../components/list/ListItem';

const FreeCodeCampBE_API = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("fcc-be-api-cert.title");

  return (
    <ContentWrapper image={"polygon-scatter-haikei-5.svg"} backgroundOpacity="full">
      <ContentPage contentAlignment='center' >
        <p className={Content.Category}>Course</p>
        <h1 className={Content.Title}
          style={{
            textAlign: "center"
          }}
        >{title}</h1>

        <ContentList>
          <ListItem
            projectName={'timestamp-microservice'}
            technologies={["Node", "Express"]}
            website={'Replit'}
            link={'https://fcc-timestamp.airizzuto.repl.co/'}
          />
          <ListItem
            projectName={'request-header-parser-microservice'}
            technologies={["Node", "Express"]}
            website={'Replit'}
            link={'https://fcc-project-headerparser.airizzuto.repl.co/'}
          />
          <ListItem
            projectName={'url-shortener-microservice'}
            technologies={["Node", "Express", "MongoDB", "Mongoose ORM"]}
            website={'Replit'}
            link={'https://fcc-project-urlshortener.airizzuto.repl.co/'}
          />
          <ListItem
            projectName={'exercise-tracker'}
            technologies={["Node", "Express", "MongoDB", "Mongoose ORM"]}
            website={'Replit'}
            link={'https://fcc-exercisetracker.airizzuto.repl.co/'}
          />
          <ListItem
            projectName={'file-metadata-microservice'}
            technologies={["Node", "Express"]}
            website={'Replit'}
            link={'https://fcc-filemetadata-project.airizzuto.repl.co/'}
          />
        </ContentList>

        {/* TODO: add cert */}
      </ContentPage>
    </ContentWrapper>
  )
}

export default FreeCodeCampBE_API;

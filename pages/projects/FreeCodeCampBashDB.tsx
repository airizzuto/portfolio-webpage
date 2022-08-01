import React from 'react'
import useTranslation from "next-translate/useTranslation";

import ContentWrapper from '../../components/section/ContentWrapper';
import ContentMosaic from '../../components/section/ContentMosaic';
import ContentPage from '../../components/section/ContentPage';
import CardWrapper from '../../components/card/CardWrapper';
import CardProject from '../../components/card/CardProject';

import Content from "../../styles/content/ContentPage.module.scss";

const FreeCodeCampBashDB = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("fcc-db-cert.title");

  return (
    <ContentWrapper image={"polygon-scatter-haikei.svg"}>
      <ContentPage contentAlignment='center' >
        <p className={Content.Category}>Course</p>
        <h1 className={Content.Title}
          style={{
            textAlign: "center"
          }}
        >{title}</h1>

        {/* TODO: Make list-table with project name | technologies applied | github repo */}
        <ContentMosaic>
          <CardWrapper imagePath={''}>
            <CardProject projectName={"Celestial Bodies DB"} label={"Github"}/>
          </CardWrapper>
          <CardWrapper imagePath={''}>
            <CardProject projectName={"World Cup DB"} label={"Github"}/>
          </CardWrapper>
          <CardWrapper imagePath={''}>
            <CardProject projectName={"Salon Appointment Scheduler Bash/DB"} label={"Github"}/>
          </CardWrapper>
          <CardWrapper imagePath={''}>
            <CardProject projectName={"Periodic Table Bash/DB"} label={"Github"}/>
          </CardWrapper>
          <CardWrapper imagePath={''}>
            <CardProject projectName={"Number Guesser Bash/DB"} label={"Github"}/>
          </CardWrapper>
        </ContentMosaic>
      </ContentPage>
    </ContentWrapper>
  )
}

export default FreeCodeCampBashDB

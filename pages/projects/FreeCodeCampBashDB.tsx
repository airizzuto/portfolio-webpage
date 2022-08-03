import React from 'react'
import useTranslation from "next-translate/useTranslation";

import ContentWrapper from '../../components/section/ContentWrapper';
import ContentPage from '../../components/section/ContentPage';

import Content from "../../styles/content/ContentPage.module.scss";
import ContentList from '../../components/section/ContentList';
import ListItem from '../../components/list/ListItem';

const FreeCodeCampBashDB = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("fcc-db-cert.title");

  return (
    <ContentWrapper image={"nasa1.jpg"}>
      <ContentPage contentAlignment='center' >
        <p className={Content.Category}>Course</p>
        <h1 className={Content.Title}
          style={{
            textAlign: "center"
          }}
        >{title}</h1>

        <ContentList>
          <ListItem
            projectName={'celestial-body-db'}
            technologies={["PostgreSQL"]}
            website={'Github'}
            link={'https://github.com/airizzuto/FCC-CelestialBodiesDatabase'}
          />
          <ListItem
            projectName={'world-cup-db'}
            technologies={["PostgreSQL"]}
            website={'Github'}
            link={'https://github.com/airizzuto/FCC-WorldCupDatabase'}
          />
          <ListItem
            projectName={'salon-appointment-scheduler'}
            technologies={["Bash", "PostgreSQL"]}
            website={'Github'}
            link={'https://github.com/airizzuto/FCC-SalonAppointmentScheduler'}
          />
          <ListItem
            projectName={'periodic-table'}
            technologies={["Bash", "PostgreSQL"]}
            website={'Github'}
            link={'https://github.com/airizzuto/FCC-PeriodicTable'}
          />
          <ListItem
            projectName={'number-guesser'}
            technologies={["Bash", "PostgreSQL"]}
            website={'Github'}
            link={'https://github.com/airizzuto/FCC-NumberGuesser'}
          />
        </ContentList>

        {/* TODO: add cert */}
      </ContentPage>
    </ContentWrapper>
  )
}

export default FreeCodeCampBashDB

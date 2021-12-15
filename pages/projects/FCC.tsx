import React from 'react'
import useTranslation from "next-translate/useTranslation";

import ContentWrapper from '../../components/content/ContentWrapper';
import ContentCards from '../../components/content/ContentCards';
import FCCProject from './FCCProject';

import Style from "../../styles/content/ContentDisplay.module.scss";

const FCC = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("fcc-fe-cert.title");

  return (
    <ContentWrapper image={"/polygon-scatter-haikei3.svg"}>
      <p className={Style.Category}>Course</p>
      <h1 className={Style.Title}>{title}</h1>
      <ContentCards>
        <FCCProject
          imagePath={'/random-quote-generator.png'}
          projectName={'random-quote-generator'}
        />
        <FCCProject 
          imagePath={'/drum-machine.png'}
          projectName={'drum-machine'}
        />
        <FCCProject 
          imagePath={'/markdown-previewer.png'}
          projectName={'markdown-previewer'}
        />
        <FCCProject 
          imagePath={'/calculator.png'}
          projectName={'calculator'}
        />
        <FCCProject
          imagePath={'/25+5Clock.png'}
          projectName={"25+5clock"}
        />
      </ContentCards>
    </ContentWrapper>
  )
}

export default FCC

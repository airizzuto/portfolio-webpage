import React from 'react'
import useTranslation from "next-translate/useTranslation";

import ContentWrapper from '../../components/Content/ContentWrapper';
import ContentCards from '../../components/Content/ContentCards';
import FCCProject from './FCCProject';

import Style from "../../styles/ContentDisplay.module.scss";

const FCC = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("fcc-fe-cert.title");

  return (
    <ContentWrapper image={"static/polygon-scatter-haikei3.svg"}>
      <h1 className={Style.Title}>{title}</h1>
      <ContentCards>
        <FCCProject
          imagePath={'static/random-quote-generator.png'}
          projectName={'random-quote-generator'}
        />
        <FCCProject 
          imagePath={'static/drum-machine.png'}
          projectName={'drum-machine'}
        />
        <FCCProject 
          imagePath={'static/markdown-previewer.png'}
          projectName={'markdown-previewer'}
        />
        <FCCProject 
          imagePath={'static/calculator.png'}
          projectName={'calculator'}
        />
        <FCCProject
          imagePath={'static/25+5Clock.png'}
          projectName={"25+5clock"}
        />
      </ContentCards>
    </ContentWrapper>
  )
}

export default FCC

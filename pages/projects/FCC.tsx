import React from 'react'
import useTranslation from "next-translate/useTranslation";

import ContentWrapper from '../../components/Content/ContentWrapper';
import ContentCard from '../../components/Content/ContentCard';
import FCCProject from './FCCProject';

import Style from "../../styles/ContentDisplay.module.scss";

const FCC = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("fcc-fe-cert.title");

  return (
    <ContentWrapper image={"static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"}>
      <h1 className={Style.Title}>{title}</h1>
      <ContentCard>
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
      </ContentCard>
    </ContentWrapper>
  )
}

export default FCC

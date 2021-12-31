import React from 'react'
import useTranslation from "next-translate/useTranslation";

import ContentWrapper from '../../components/content/ContentWrapper';
import ContentMosaic from '../../components/content/ContentMosaic';
import ContentPage from '../../components/content/ContentPage';
import FCCProject from './FCCProject';

import Content from "../../styles/content/ContentPage.module.scss";

const FCC = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("fcc-fe-cert.title");

  return (
    <ContentWrapper image={"polygon-scatter-haikei.svg"}>
      <ContentPage >
        <p className={Content.Category}>Course</p>
        <h1 className={Content.Title}>{title}</h1>
        <ContentMosaic>
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
        </ContentMosaic>
      </ContentPage>
    </ContentWrapper>
  )
}

export default FCC

import React from 'react'
import useTranslation from "next-translate/useTranslation";

import ContentWrapper from '../../components/section/ContentWrapper';
import ContentMosaic from '../../components/section/ContentMosaic';
import ContentPage from '../../components/section/ContentPage';
import CardWrapper from '../../components/card/CardWrapper';
import CardContent from '../../components/card/CardContent';

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
          <CardWrapper imagePath={'/random-quote-generator.png'}>
            <CardContent projectName={'random-quote-generator'}/>
          </CardWrapper>

          <CardWrapper imagePath={'/drum-machine.png'}>
            <CardContent projectName={'drum-machine'}/>
          </CardWrapper>

          <CardWrapper imagePath={'/markdown-previewer.png'}>
            <CardContent projectName={'markdown-previewer'}/>
          </CardWrapper>

          <CardWrapper imagePath={'/calculator.png'}>
            <CardContent projectName={'calculator'}/>
          </CardWrapper>

          <CardWrapper imagePath={'/25+5Clock.png'}>
            <CardContent projectName={"25+5clock"}/>
          </CardWrapper>
        </ContentMosaic>
      </ContentPage>
    </ContentWrapper>
  )
}

export default FCC

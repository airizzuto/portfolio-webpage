import React from 'react'
import useTranslation from "next-translate/useTranslation";

import ContentWrapper from '../../components/section/ContentWrapper';
import ContentMosaic from '../../components/section/ContentMosaic';
import ContentPage from '../../components/section/ContentPage';
import CardWrapper from '../../components/card/CardWrapper';
import CardProject from '../../components/card/CardProject';

import Content from "../../styles/content/ContentPage.module.scss";

const FCC = () => {
  const { t, lang } = useTranslation('projects');
  const title = t("fcc-fe-cert.title");

  return (
    <ContentWrapper image={"polygon-scatter-haikei.svg"}>
      {/* TODO: content page wrapper width 100% for mosaic */}
      <ContentPage contentAlignment='center' >
        <p className={Content.Category}>Course</p>
        <h1 className={Content.Title}
          style={{
            textAlign: "center"
          }}
        >{title}</h1>
  
        <ContentMosaic>
          <CardWrapper imagePath={'/random-quote-generator.png'}>
            <CardProject projectName={'random-quote-generator'}/>
          </CardWrapper>

          <CardWrapper imagePath={'/drum-machine.png'}>
            <CardProject projectName={'drum-machine'}/>
          </CardWrapper>

          <CardWrapper imagePath={'/markdown-previewer.png'}>
            <CardProject projectName={'markdown-previewer'}/>
          </CardWrapper>

          <CardWrapper imagePath={'/calculator.png'}>
            <CardProject projectName={'calculator'}/>
          </CardWrapper>

          <CardWrapper imagePath={'/25+5Clock.png'}>
            <CardProject projectName={"25+5clock"}/>
          </CardWrapper>
        </ContentMosaic>
      </ContentPage>
    </ContentWrapper>
  )
}

export default FCC

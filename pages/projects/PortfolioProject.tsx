import React from 'react'
import ContentWrapper from '../components/Content/ContentWrapper';
import ContentLink from '../components/Content/ContentLinks';

import Style from "../../styles/ContentDisplay.module.scss";

const PortfolioProject = () => {
  return (
    <ContentWrapper image={"static/tianyi-ma.jpg"}>
      <h1 className={Style.Title}>
        Personal Portfolio Webpage
      </h1>
      <div className={Style.Text}>
        <p>Small portfolio website made to showcase personal projects and information about myself.</p>
        <p>Tools used for FE: Next, React, Typescript and Sass</p>
      </div>
      <div className={Style.Links}>
        <ContentLink 
          label={"Github"}
          href={"https://github.com/airizzuto/portfolio-webpage-template"}
        />
      </div>
    </ContentWrapper>
  )
}

export default PortfolioProject

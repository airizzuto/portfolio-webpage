import React from 'react'
import ProjectContent from './ProjectContent';

import Style from "../../styles/ContentDisplay.module.scss";
import Link from 'next/link';

const PortfolioProject = () => {
  return (
    <ProjectContent image={"static/tianyi-ma.jpg"}>
      <h1 className={Style.Title}>
        Personal Portfolio Webpage
      </h1>
      <div className={Style.Text}>
        <p>Personal website made to showcase other projects and information about myself.</p>
        <p>Tools used for FE: Next, Typescript and Sass</p>
      </div>
      <div>
        <Link href={"https://github.com/airizzuto/portfolio-webpage-template"}>
          Go to Github
        </Link>
      </div>
    </ProjectContent>
  )
}

export default PortfolioProject

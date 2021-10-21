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
        <p>Small portfolio website made to showcase personal projects and information about myself.</p>
        <p>Tools used for FE: Next, Typescript and Sass</p>
      </div>
      <div className={Style.Links}>
        <label>
          Github:
          <Link href={"https://github.com/airizzuto/portfolio-webpage-template"}>
            https://github.com/airizzuto/portfolio-webpage-template
          </Link>
        </label>

      </div>
    </ProjectContent>
  )
}

export default PortfolioProject

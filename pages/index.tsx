import React from "react";

import Landing from "./Landing";
import AirRangingProject from "./projects/AirRangingProject";
import FreeCodeCampBashDB from "./projects/FreeCodeCampBashDB";
import FreeCodeCampFE from "./projects/FreeCodeCampFE";
import PortfolioProject from "./projects/PortfolioProject";

export default function Home() {

  return (
    <>
      <Landing />
      <AirRangingProject />
      <PortfolioProject />
      <FreeCodeCampFE />
      <FreeCodeCampBashDB />
    </>
  )
}

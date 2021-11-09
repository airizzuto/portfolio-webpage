import React from "react";

import Landing from "./Landing";
import AirRangingProject from "./projects/AirRangingProject";
import FCC from "./projects/FCC";
import PortfolioProject from "./projects/PortfolioProject";

export default function Home() {

  return (
    <>
      <Landing />
      <AirRangingProject />
      <PortfolioProject />
      <FCC />
    </>
  )
}

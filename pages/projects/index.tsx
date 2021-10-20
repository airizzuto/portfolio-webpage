import React from "react";
import AirRangingProject from "./AirRangingProject";
import PortfolioProject from "./PortfolioProject";

export default function Projects() {
    return (
        <div>
            {/* TODO: replace Content component with a new grid component */}
            <PortfolioProject />
            <AirRangingProject />
        </div>
    )
}
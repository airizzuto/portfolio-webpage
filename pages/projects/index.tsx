import ContentDisplay from "../components/ContentDisplay"

const projects = [
  { // TODO: move to a separate file
    key: "PersonalPortfolioContent",
    title: "Personal Portfolio Website",
    text: [
        "Personal website made with Next, Typescript and Sass."
    ],
    image: "static/tianyi-ma.jpg", // TODO: replace image
  },
  {
      key: "AirRangingContent",
      title: "Air Ranging App",
      text: [
          "Web application for flight fuel planning, with aircraft management and user account.",
          "WebAPI created using .NET and Entity Framework.",
          "Database using PostgreSQL.",
          "Frontend developed with React, Typescript and Sass."
      ],
      image: "static/AirRangingMap.png",
  },
]

export default function Projects() {
    return (
        <div>
            {/* TODO: replace Content component with a new grid component */}
            <ContentDisplay contents={projects} />
        </div>
    )
}
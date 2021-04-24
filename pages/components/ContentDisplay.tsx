import React from "react"
import Content from "./Content"
import ProjectContent from "./ProjectContent"

interface IContent {
  contents: Content[]
}

const ContentDisplay = ({contents}: IContent) => {
    return (
      <>
        {contents.map(content => {
            return <ProjectContent title={content.title} text={content.text} image={content.image} />  // TODO: content key
          }) 
        }
      </>
    )
}

export default ContentDisplay
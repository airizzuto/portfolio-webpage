import Content from "../../models/Content"
import ProjectContent from "./ProjectContent"

interface Props {
  contents: Content[]
}

const ContentDisplay = ({contents}: Props) => {
  return (
    <>
      {contents?.map(content => {
          return <ProjectContent title={content.title} text={content.text} image={content.image} />  // TODO: content key
        }) 
      }
    </>
  )
}

export default ContentDisplay
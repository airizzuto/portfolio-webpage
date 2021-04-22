import Content from "../components/Content"
import ContentDisplay from "../components/ContentDisplay"

const contact: Content = { // TODO: move to a separate file
    title: "Contact",
    info: "FORM PLACEHOLDER",
    imagePath: "static/nasa2.jpg",
}

export default function Contact() {
    return (
        <>
            <ContentDisplay content={contact}/>
        </>
    )
}
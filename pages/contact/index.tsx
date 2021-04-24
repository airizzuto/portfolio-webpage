import ContentDisplay from "../components/ContentDisplay"

const contact = [
  { // TODO: move to a separate file
    title: "Contact",
    text: "FORM PLACEHOLDER",
    image: "static/nasa2.jpg",
  },
]

export default function Contact() {
    return (
      <div>
        <ContentDisplay contents={contact}/>
      </div>
    )
}
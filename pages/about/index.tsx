import ContentDisplay from "../components/ContentDisplay";

const about = [
  {
    title: "About Me",
    text: "ABOUT INFO PLACEHOLDER",
    image: "static/nihon-graphy.jpg",
  },
]

export default function About() {
    return (
      <div>
        <ContentDisplay contents={about} />
      </div>
    )
}

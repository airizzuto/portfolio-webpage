import Content from "../components/Content";
import ContentDisplay from "../components/ContentDisplay";

const about: Content = {
    title: "About Me",
    info: ["ABOUT INFO PLACEHOLDER"],
    imagePath: "static/nihon-graphy.jpg",
}


export default function About() {
    return (
        <>
            <ContentDisplay content={about} />
        </>
    )
}

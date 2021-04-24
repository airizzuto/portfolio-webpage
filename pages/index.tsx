import ContentDisplay from "./components/ContentDisplay"

const main = [{
  title: "PLACEHOLDER TITLE", 
  text: "Welcome placeholder",
  image: "static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg",
}]

export default function Home() {
  return (
    <>
      <ContentDisplay contents={main} />
    </>
  )
}

import ContentDisplay from "./components/ContentDisplay"

const main = {
  title: "PLACEHOLDER TITLE", 
  text: "Welcome placeholder",
  imagePath: "static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg",
}

export default function Home() {
  return (
    <>
      <ContentDisplay content={main} />
    </>
  )
}

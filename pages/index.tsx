import Style from "../styles/ContentDisplay.module.scss";

const main = [{
  title: "Agustín Ignacio Rizzuto", 
  text: "Full Stack Developer",
  image: "static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg",
}]

export default function Home() {
  return (
    <div className={Style.Container}
      style={{
        backgroundImage: `url(${"static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"})`
      }}
    >
      <div className={Style.Content}>
        <h1 className={Style.Title}>Agustín Ignacio Rizzuto</h1>
        <h2 className={Style.SubTitle}>Full Stack Developer</h2>
        <p className={Style.Text}>
          Welcome to my personal website.
        </p>
      </div>
    </div>
  )
}

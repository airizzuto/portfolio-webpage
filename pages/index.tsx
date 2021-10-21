import Style from "../styles/ContentDisplay.module.scss";

export default function Home() {
  return (
    <div className={Style.Container}
      style={{
        backgroundImage: `url(${"static/christian-wiediger-WkfDrhxDMC8-unsplash.jpg"})`
      }}
    >
      <div className={Style.Background}>
        <h1 className={Style.Title}>Agustín Ignacio Rizzuto</h1>
        <h2 className={Style.SubTitle}>Full Stack Developer</h2>
        <p className={Style.Text}>
          Welcome to my personal website.
        </p>
        <p className={Style.Text}>
          You can see my projects showcase, get to know a bit about myself and in case you are interested you can contact me.
        </p>
      </div>
    </div>
  )
}

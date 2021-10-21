
import Style from "../../styles/ContentDisplay.module.scss";

export default function About() {
    return (
      <div className={Style.Container}
      style={{
        backgroundImage: `url(${"static/nihon-graphy.jpg"})`
      }}
    >
      <div className={Style.Background}>
        <h1 className={Style.Title}>About Me</h1>
        <div className={Style.Text}>
          <p>
            I am a Full Stack software developer using .NET, PostgreSQL, React and Typescript. Before I used to work as a CAD designer and analyst of CFD/FEM simulations in the aerospace industry.
          </p>
          <p>

          </p>
        </div>
      </div>
    </div>
    )
}

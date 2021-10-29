
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
            I am Full Stack software developer using .NET, PostgreSQL, React and Typescript.
          </p>
          <p>
            Before I used to work as a CAD designer and analyst of CFD/FEM thermal/structural simulations in the aerospace industry.
          </p>
          <p>
            Programming always had my interest and started to study it to further improve my productivity and quality of work. Focused on scripting and data analysis at first, and switching to development after realizing the potential it has for creating the future technologies and the challenges that it provided.
          </p>
          <p>
            I am also a pilot of airplane, and coursed the commercial pilot training.
          </p>
        </div>
      </div>
    </div>
    )
}

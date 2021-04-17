import NavButton from "./NavButton"
import styles from "../../styles/Menu.module.scss"

const Menu = () => {
    return (
      <menu className={styles.Menu}>
        <ul>
          <li>
            <NavButton text={"HOME"} href={"/"} />
          </li>
          <li>
            <NavButton text={"PROJECTS"} href={"/projects"} />
          </li>
          <li>
            <NavButton text={"ABOUT"} href={"/about"} />
          </li>
          <li>
            <NavButton text={"CONTACT"} href={"/contact"} />
          </li>
        </ul>
      </menu>
    );
}

export default Menu
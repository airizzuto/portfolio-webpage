import NavButton from "./NavButton"
import styles from "../../styles/Menu.module.scss"

const Menu = () => {
    return (
      <>
        <input type="checkbox" id="menu-input" className={styles.MenuInput}></input>
        <label htmlFor="menu-input" className={styles.MenuButton}><span></span></label>
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
      </>
    );
}

export default Menu
import React from "react";
import NavSections from "./NavSections";

import styles from "../../styles/Menu.module.scss"

const Menu = () => (
  <>
    <input type="checkbox" id="menu-input" className={styles.MenuInput}></input>
    <label htmlFor="menu-input" className={styles.MenuButton}><span></span></label>
    <menu className={styles.Menu}>
      <ul>
        <NavSections />
      </ul>
    </menu>
  </>
)

export default Menu
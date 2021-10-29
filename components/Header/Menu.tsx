import React from "react";
import NavSections from "./NavSections";

import Style from "../../styles/Header/Menu.module.scss";

const Menu = () => (
  <>
    <input type="checkbox" id="menu-input" className={Style.MenuInput}></input>
    <label htmlFor="menu-input" className={Style.MenuButton}><span></span></label>
    <menu className={Style.Menu}>
      <ul>
        <NavSections />
      </ul>
    </menu>
  </>
)

export default Menu;

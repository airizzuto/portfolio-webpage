import React, { useRef, useState } from "react";
import NavSections from "./NavSections";

import Style from "../../styles/Header/Menu.module.scss";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef(null);
  
  const handleMenuDisplay = () => {
    setShowMenu(!showMenu);
  }

  const handleMenuClose = () => {
    setShowMenu(false);
  }

  useOnClickOutside(ref, handleMenuClose);

  return (
    <>
      <input type="checkbox" id="menu-input" className={Style.MenuInput} onClick={handleMenuDisplay}></input>
      <label htmlFor="menu-input" className={Style.MenuButton}><span></span></label>
      <menu className={Style.Menu}>
        <ul>
          <NavSections />
        </ul>
      </menu>
    </>
  );
}

export default Menu;

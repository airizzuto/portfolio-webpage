import React, { useEffect, useRef, useState } from "react";
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

  const style: React.CSSProperties = showMenu ? { visibility: "visible" } : { visibility: "hidden" };

  return (
    <>
      <input 
        className={Style.MenuInput}
        type="checkbox" 
        id="menu-input" 
        checked={showMenu}
        onChange={handleMenuDisplay}
      ></input>
      <label htmlFor="menu-input" className={Style.MenuButton}><span></span></label>
      <menu className={Style.Menu} style={style}>
        <NavSections handleClick={handleMenuClose}/>
      </menu>
    </>
  );
}

export default Menu;

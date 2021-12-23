import React, { useRef, useState } from "react";
import NavSections from "./NavSections";

import useOnClickOutside from "../../hooks/useOnClickOutside";

import Style from "../../styles/header/Menu.module.scss";

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

  const style: React.CSSProperties = showMenu ? { display: "block" } : { display: "none" };

  return (
    <>
      <input
        className={Style.MenuInput}
        type="checkbox" 
        id="menu-input" 
        checked={showMenu}
        onChange={handleMenuDisplay}
      ></input>
      <label htmlFor="menu-input" className={Style.MenuButton}>
        <span></span>
      </label>

      <menu className={Style.Menu} style={style} ref={ref}>
        <NavSections handleClick={handleMenuClose}/>
      </menu>
    </>
  );
}

export default Menu;

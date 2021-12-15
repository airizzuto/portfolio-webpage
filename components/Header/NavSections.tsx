import React from 'react'
import useTranslation from 'next-translate/useTranslation'

import NavButton from './NavButton';

interface Props {
  handleClick?: () => void;
}

const NavSections: React.FC<Props> = ({handleClick}) => {
  
  const { t, lang } = useTranslation('common');
  const home = t("nav_home");
  const about = t("nav_about");
  const contact = t("nav_contact");

  return (
    <ul>
      <NavButton text={home} href={"/"} handleClick={handleClick}/>
      <NavButton text={about} href={"/about"} handleClick={handleClick}/>
      <NavButton text={contact} href={"/contact"} handleClick={handleClick}/>
    </ul>
  )
}

export default NavSections;

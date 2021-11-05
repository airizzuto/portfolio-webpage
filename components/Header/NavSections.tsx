import React from 'react'
import NavButton from './NavButton';

import useTranslation from 'next-translate/useTranslation'

interface Props {
  handleClick?: () => void;
}

const NavSections: React.FC<Props> = ({handleClick}) => {
  
  const { t, lang } = useTranslation('common');
  const home = t("nav_home");
  const projects = t("nav_projects");
  const about = t("nav_about");
  const contact = t("nav_contact");

  return (
    <ul>
      <li>
        <NavButton text={home} href={"/"} handleClick={handleClick}/>
      </li>
      <li>
        <NavButton text={projects} href={"/projects"} handleClick={handleClick}/>
      </li>
      <li>
        <NavButton text={about} href={"/about"} handleClick={handleClick}/>
      </li>
      <li>
        <NavButton text={contact} href={"/contact"} handleClick={handleClick}/>
      </li>
    </ul>
  )
}

export default NavSections;

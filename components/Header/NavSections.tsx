import React from 'react'
import NavButton from './NavButton';

import useTranslation from 'next-translate/useTranslation'


const NavSections = () => {
  
  const { t, lang } = useTranslation('common');
  const home = t("nav_home");
  const projects = t("nav_projects");
  const about = t("nav_about");
  const contact = t("nav_contact");

  return (
    <>
      <li><NavButton text={home} href={"/"}/></li>
      <li><NavButton text={projects} href={"/projects"}/></li>
      <li><NavButton text={about} href={"/about"}/></li>
      <li><NavButton text={contact} href={"/contact"}/></li>
    </>
  )
}

export default NavSections;

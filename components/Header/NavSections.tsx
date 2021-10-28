import React from 'react'
import NavButton from './NavButton';

import useTranslation from 'next-translate/useTranslation'


const NavSections = () => {
  const { t } = useTranslation('nav')

  return (
    <>
      <li><NavButton text={t("nav_home")} href={"/"}/></li>
      <li><NavButton text={t("nav_projects")} href={"/projects"}/></li>
      <li><NavButton text={t("nav_about")} href={"/about"}/></li>
      <li><NavButton text={t("nav_contact")} href={"/contact"}/></li>
    </>
  )
}

export default NavSections;

import React from 'react'
import NavButton from './NavButton';

import useTranslation from 'next-translate/useTranslation'


const NavSections = () => {
  const { t } = useTranslation('nav')

  return (
    <>
      <li><NavButton text={t("home")} href={"/"}/></li>
      <li><NavButton text={t("projects")} href={"/projects"}/></li>
      <li><NavButton text={t("about")} href={"/about"}/></li>
      <li><NavButton text={t("contact")} href={"/contact"}/></li>
    </>
  )
}

export default NavSections

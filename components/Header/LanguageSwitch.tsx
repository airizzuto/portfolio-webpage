import Link from 'next/link';
import React from 'react'

import Style from '../../styles/Header/LanguageSwitch.module.scss'

const LanguageSwitch = () => {
  // TODO: get current locale
  return (
    <div className={Style.LanguageSwitch}>
      <Link href="/" locale="en">
        <a>EN</a>
      </Link>
      /
      <Link href="/" locale="es">
        <a>ES</a>
      </Link>
    </div>
  )
}

export default LanguageSwitch

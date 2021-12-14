import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

import Style from './../../styles/header/LanguageSwitch.module.scss'

const LanguageSwitch = () => {
  const router = useRouter();
  const { locale } = router;

  const selectedStyle = {
    color: "#ffbe1a"
  }

  return (
    <div className={Style.LanguageSwitch}>
      <Link href="/" locale="en">
        <a style={(locale === "en") ? selectedStyle : undefined}>
          EN
        </a>
      </Link>
      /
      <Link href="/" locale="es">
        <a style={(locale === "es") ? selectedStyle : undefined}>
          ES
        </a>
      </Link>
    </div>
  )
}

export default LanguageSwitch;

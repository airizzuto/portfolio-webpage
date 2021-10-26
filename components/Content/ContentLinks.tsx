import React from 'react'
import Link from 'next/link';

import Style from "./ContentLink.module.scss";

interface Props {
  label: string;
  href?: string;
}

/**
 * Creates a link with a label for navigation to other pages.
 * @param label 
 * @param href 
 * @returns component with label and Link
 */
const ContentLink: React.FC<Props> = ({label, href}) => {
  return (
    <div className={Style.Container}>
      <label>
        {label}:
      </label>
      <Link href={href ? href : "/#"}>
        {href ? href : "Work In Progress"}
      </Link>
    </div>
  )
}

export default ContentLink

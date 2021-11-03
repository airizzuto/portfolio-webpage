import React, { useState } from "react"
import Header from "./Header/Header"
import Footer from "./Footer"
import Meta from "./Meta"
import ScrollArrow from "./ScrollArrow"

import Style from "../styles/Layout.module.scss"

interface Props {
    children: any;
}

const Layout = ({ children }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Meta /> {/*TODO: Additional meta */}
      <main className={Style.Container}>
        <div className={Style.Header}>
          <Header />
        </div>

        <div className={Style.ContentDisplay}>{children}</div>

        <ScrollArrow />

        {/*TODO: Go to top */}

        <div className={Style.Footer}>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout
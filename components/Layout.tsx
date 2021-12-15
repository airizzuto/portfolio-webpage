import React from "react"
import Header from "./header/Header"
import Footer from "./Footer"
import Meta from "./Meta"

import Style from "../styles/Layout.module.scss"

interface Props {
    children: any;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Meta />
      <main className={Style.Container}>
        <div className={Style.Header}>
          <Header />
        </div>

        <div className={Style.ContentDisplay}>{children}</div>

        <div className={Style.Footer}>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Layout
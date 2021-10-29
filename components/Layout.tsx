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
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <Meta />  {/*TODO: Additional meta */}
            <main className={Style.Container}>
                <div className={Style.Header}>
                    <Header isMenuOpen={isMenuOpen}/>
                </div>

                <div className={Style.ContentDisplay}>
                    {children}
                </div>

                <ScrollArrow />

                {/*TODO: Go to top */}
                
                <div className={Style.Footer}>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default Layout
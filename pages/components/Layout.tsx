import React, { useState } from "react"
import styles from "../../styles/Layout.module.scss"
import Header from "./Header"
import Footer from "./Footer"
import Meta from "./Meta"
import ScrollArrow from "./ScrollArrow"

interface Props {
    children: any;
}

const Layout = ({ children }: Props) => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <Meta />  {/*TODO: Additional meta */}
            <main className={styles.container}>
                <div className={styles.Header}>
                    <Header isMenuOpen={isMenuOpen}/>
                </div>

                <div className={styles.ContentDisplay}>
                    {children}
                </div>

                <ScrollArrow />

                {/*TODO: Go to top */}
                
                <div className={styles.Footer}>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default Layout
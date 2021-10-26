import Header from "./Header/Header"
import Footer from "./Footer"
import Meta from "./Meta"
import ScrollArrow from "./ScrollArrow"

import styles from "../styles/Layout.module.scss"

interface Props {
    children: any;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Meta />  {/*TODO: Additional meta */}
            <main className={styles.Container}>
                <div className={styles.Header}>
                    <Header />
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
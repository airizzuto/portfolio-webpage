import styles from "../../styles/Layout.module.scss"
import Footer from "./Footer"
import Header from "./Header"
import Meta from "./Meta"

interface Props {
    children: any;
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Meta />  {/*TODO: Additional meta */}
            <main className={styles.container}>
                <div className={styles.Header}>
                    <Header />
                </div>

                <div className={styles.Content}>
                    {children}
                </div>
                {/*TODO: Slide down arrow */}

                {/*TODO: Go to top */}
                <div className={styles.Footer}>
                    <Footer />
                </div>
            </main>
        </>
    )
}

export default Layout
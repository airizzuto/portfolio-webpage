import styles from "../../styles/Layout.module.scss"
import Footer from "./Footer"
import Header from "./Header"
import Meta from "./Meta"

interface Props {
    children: JSX.Element
}

export const Layout = ({ children }: Props) => {
    return (
        <>
            <Meta />
            <div>
                <main className={styles.container}>
                    <div className={styles.Header}>
                        <Header/>
                    </div>
                    <div className={styles.Content}>
                        {children}
                    </div>
                    <div className={styles.Footer}>
                        <Footer />
                    </div>
                </main>
            </div>
        </>
    )
}

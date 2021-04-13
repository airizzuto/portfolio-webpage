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
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                    <Footer />
                </main>
            </div>
        </>
    )
}

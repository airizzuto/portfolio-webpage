import styles from "../../styles/Layout.module.scss"
import Footer from "./Footer"
import Header from "./Header"
import Meta from "./Meta"

interface Props {
    children: JSX.Element
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Meta />  {/*TODO: Additional meta */}
            <div>
                <main className={styles.container}>
                    <Header/>

                    {children}

                    {/*TODO: Slide down arrow */}

                    {/*TODO: Go to top */}

                    <Footer />
                </main>
            </div>
        </>
    )
}

export default Layout
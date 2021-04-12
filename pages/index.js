import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Personal Porfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon/favicon.ico"/>
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

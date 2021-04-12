import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

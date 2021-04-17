import '../styles/globals.scss'
import Layout from './components/Layout'

function MyApp({ Component, pageProps }) {
  {/* TODO: Menu state  and logic */}
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
import type { AppProps /*, AppContext */ } from 'next/app'

import Layout from '../components/Layout'
import '../styles/globals.scss'


const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} key={router.route} />
    </Layout>
  )
}

export default App;

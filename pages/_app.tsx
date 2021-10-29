import { AppPropsType } from 'next/dist/next-server/lib/utils';
import Layout from '../components/Layout'

import '../styles/globals.scss'


const App = ({ Component, pageProps, router }: AppPropsType ) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  )
}

export default App;

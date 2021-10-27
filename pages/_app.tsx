import { AppPropsType } from 'next/dist/next-server/lib/utils';
import Layout from '../components/Layout'

import '../styles/globals.scss'


const MyApp = ({ Component, pageProps, router }: AppPropsType ) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </>
  )
}

export default MyApp;

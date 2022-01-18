import Head from 'next/head'
import Layout from '../components/layout';
import Auth from '../components/auth';

const Authenticate = (): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>Signin</title>
      </Head>
      <section>
        <Auth />
      </section>
    </Layout>
  )
}

export default Authenticate

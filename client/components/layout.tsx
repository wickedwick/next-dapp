import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { LayoutProps } from '../types/components'
import Nav from './nav'

const name = '[Your Mom]'

const Layout = ({ children, home }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <Nav />
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Layout

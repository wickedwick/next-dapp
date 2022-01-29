import { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { AuthContext } from '../context/AuthContext'
import styles from './layout.module.css'
import Nav from './nav'
import utilStyles from '../styles/utils.module.css'
import { LayoutProps } from '../types/components'

export const siteTitle = 'Wickham.io'

const Layout = ({ children, home }: LayoutProps): JSX.Element => {
  const { user } = useContext(AuthContext)
  const name = user ? `Hey there ${user.name} 👋` : 'Hello 👋'
  
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
        {home && (
          <>
            <img src="/images/5214540.jpeg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name} />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
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

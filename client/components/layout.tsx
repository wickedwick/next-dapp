import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import Nav from './nav'
import utilStyles from '../styles/utils.module.css'
import { LayoutProps } from '../types/components'

export const siteTitle = 'Wickham.io'

const Layout = ({ children, home }: LayoutProps): JSX.Element => {
  const name = 'Hello 👋'
  
  return (
    <>
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
      <div className="custom-shape-divider-top-1645153501">
        <svg id="visual" viewBox="0 0 960 540" width="100%" height="540" xmlns="http://www.w3.org/2000/svg" version="1.1"><rect x="0" y="0" width="960" height="540" fill="#273444"></rect><path d="M0 262L20 262.8C40 263.7 80 265.3 120 271.3C160 277.3 200 287.7 240 291C280 294.3 320 290.7 360 284.2C400 277.7 440 268.3 480 273.3C520 278.3 560 297.7 600 297.5C640 297.3 680 277.7 720 269.5C760 261.3 800 264.7 840 269.3C880 274 920 280 940 283L960 286L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#13ce66"></path>
          <path d="M0 311L20 314.5C40 318 80 325 120 325.2C160 325.3 200 318.7 240 325.2C280 331.7 320 351.3 360 358.3C400 365.3 440 359.7 480 353.7C520 347.7 560 341.3 600 340.7C640 340 680 345 720 342.5C760 340 800 330 840 332C880 334 920 348 940 355L960 362L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#00c5a9"></path>
          <path d="M0 410L20 406.5C40 403 80 396 120 395.8C160 395.7 200 402.3 240 399C280 395.7 320 382.3 360 381C400 379.7 440 390.3 480 397.3C520 404.3 560 407.7 600 410C640 412.3 680 413.7 720 411.2C760 408.7 800 402.3 840 397.7C880 393 920 390 940 388.5L960 387L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#00b6c6"></path>
          <path d="M0 418L20 417.7C40 417.3 80 416.7 120 417.8C160 419 200 422 240 428.5C280 435 320 445 360 447.8C400 450.7 440 446.3 480 447.3C520 448.3 560 454.7 600 450.7C640 446.7 680 432.3 720 429.5C760 426.7 800 435.3 840 435.5C880 435.7 920 427.3 940 423.2L960 419L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#62a3c0"></path>
          <path d="M0 495L20 497.3C40 499.7 80 504.3 120 506.2C160 508 200 507 240 501.2C280 495.3 320 484.7 360 485.3C400 486 440 498 480 500.7C520 503.3 560 496.7 600 493.7C640 490.7 680 491.3 720 488.5C760 485.7 800 479.3 840 476.7C880 474 920 475 940 475.5L960 476L960 541L940 541C920 541 880 541 840 541C800 541 760 541 720 541C680 541 640 541 600 541C560 541 520 541 480 541C440 541 400 541 360 541C320 541 280 541 240 541C200 541 160 541 120 541C80 541 40 541 20 541L0 541Z" fill="#8492a6"></path>
        </svg>
      </div>
    </>
  )
}

export default Layout

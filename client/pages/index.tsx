import { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { GunContext } from '../context/GunContext'
import utilStyles from '../styles/utils.module.css'
import { BlogPost } from '../types/blog'
import { GetStaticProps } from 'next'
import { getSortedPostsData } from '../services/posts'

export default function Home({ allPostsData }) {
  const { gun } = useContext(GunContext)

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3 data-aos="fade-up" className="mb-3">
          I am a human software engineer named Travis.
        </h3>
        <p data-aos="fade-up"data-aos-delay="600" data-aos-duration="600">
          I love building and learning new things.<br></br>
          Take a look around, check out my links, and feel free to drop me a line. This site is hosted on the Interplanetary File System and uses Gun JS so it is a decentralized app. 
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} data-aos="fade-right" data-aos-delay="1200" data-aos-duration="700">
        {allPostsData && (
          <>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {allPostsData.map((post) => (
                <li className={utilStyles.listItem} key={post ? `${post.id}_${post.date}` : ''}>
                  {post && (
                    <>
                      <Link href={`/posts/${post && post.id}`}>
                        <a>{post.title}</a>
                      </Link>
                      <br />
                      <small className={utilStyles.lightText}>
                        <Date dateString={post.date} />
                      </small>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

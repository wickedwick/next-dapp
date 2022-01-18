import { useEffect, useState } from 'react'
import Head from 'next/head'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import axios from 'axios'
import { NearBlogPost } from '../types/blog'
import BlogPost from '../components/blogPost'

export default function Home() {
  const [posts, setPosts] = useState<NearBlogPost[]>([])
  const [selectedPost, setSelectedPost] = useState<NearBlogPost | null>(null)
  const baseApiUrl = 'https://d-cms-test.herokuapp.com/api/public/content'

  useEffect(() => {
    axios.get(baseApiUrl)
      .then(res => {
        console.log(res.data)
        setPosts(res.data)
      })
  }, [])

  const handleShowBlog = (slug: string) => {
    axios.get(baseApiUrl + '/' + slug)
      .then(res => {
        console.log(res.data)
        setSelectedPost(res.data)
      })
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3 data-aos="fade-up" className="mb-3">
          I am a human software engineer named Travis.
        </h3>
        <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="600" className="mb-3">
          I love building and learning new things.<br></br>
        </p>
        <p data-aos="fade-up"data-aos-delay="1200" data-aos-duration="600" className="mb-3">
          Please take a look around and check out my Github/LinkedIn profiles. And feel free to drop me a line.
        </p>
        <p data-aos="fade-up"data-aos-delay="1800" data-aos-duration="600" className="mb-3">
          This site is hosted on the Interplanetary File System, uses Gun JS for data persistence, and gets content that is stored on a decentralized content management system (d CMS).
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} data-aos="fade-right" data-aos-delay="2400" data-aos-duration="700">
        {posts && (
          <>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
              {posts.map((post) => (
                <li className={utilStyles.listItem} key={post ? `${post.slug}` : ''}>
                  {post && (
                    <>
                      <button onClick={() => handleShowBlog(post.slug)}>{post.name}</button>
                      <br />
                      <small className={utilStyles.lightText}>
                        <Date dateString={post.createdAt} />
                      </small>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
      {selectedPost && (
        <BlogPost blogPost={selectedPost} setSelectedPost={setSelectedPost} />
      )}
    </Layout>
  )
}

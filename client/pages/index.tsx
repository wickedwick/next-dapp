import axios from 'axios'
import BlogPost from '../components/blogPost'
import BlogPostList from '../components/blogPostList'
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { StrapiBlogPost } from '../types/blog'
import { useEffect, useState } from 'react'

export default function Home() {
  const [posts, setPosts] = useState<StrapiBlogPost[]>([])
  const [selectedPost, setSelectedPost] = useState<StrapiBlogPost | null>(null)
  // TODO: set as a env variable
  const baseApiUrl = 'https://wickhamhome.herokuapp.com/blog-posts' //'http://localhost:1337/blog-posts'

  useEffect(() => {
    axios.get(baseApiUrl)
      .then(res => {
        setPosts(res.data)
      })
  }, [])

  const handleShowBlog = (id: number): void => {
    axios.get(baseApiUrl + '/' + id)
      .then(res => {
        setSelectedPost(res.data)
      })
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h3 data-aos="fade-up" className="text-3xl font-medium leading-tight mt-0 mb-3 text-white">
          I am a human software engineer named Travis.
        </h3>
        <p data-aos="fade-up" data-aos-delay="600" data-aos-duration="600" className="mb-3">
          I love building and learning new things.<br></br>
        </p>
        <p data-aos="fade-up"data-aos-delay="1200" data-aos-duration="600" className="mb-3">
          Please take a look around and check out my Github/LinkedIn profiles. And feel free to drop me a line.
        </p>
        <p data-aos="fade-up"data-aos-delay="1800" data-aos-duration="600" className="mb-3">
          If you are interested in working together, please feel free to reach out.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`} data-aos="fade-right" data-aos-delay="2400" data-aos-duration="700">
        {posts && (
          <>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <BlogPostList blogPosts={posts} handleShowBlog={handleShowBlog} />
          </>
        )}
      </section>
      {selectedPost && (
        <BlogPost blogPost={selectedPost} setSelectedPost={setSelectedPost} />
      )}
    </Layout>
  )
}

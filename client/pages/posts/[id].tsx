import { useContext, useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { GunContext } from '../../context/GunContext'
import utilStyles from '../../styles/utils.module.css'
import { BlogPost } from '../../types/blog'

const Post = ({ postId }) => {
  const { gun } = useContext(GunContext)
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    gun.get('posts').map().once((data) => {
      if (data && data.id === postId) {
        setPost(data as BlogPost)
      }
    })
  }, [])

  return (
    <Layout home={false}>
      <Head>
        <title>{post && post.title}</title>
      </Head>
      {post && (
        <article>
          <h1 className={utilStyles.headingXl}>{post && post.title}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={post.date} />
            </div>
          <div dangerouslySetInnerHTML={{ __html: post && post.content }} />
        </article>
      )}
    </Layout>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ['/posts/kxxqfm49ICWRlkavqgg8']
  
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = params.id
  return {
    props: {
      postId
    }
  }
}

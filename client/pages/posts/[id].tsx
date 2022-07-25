import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import DateFormatter from '../../components/date'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { BlogPost, PostPath } from '../../types/blog'
import { getAllPostIds, getPostData } from '../../services/posts'

const Post = ({ postData }): JSX.Element => {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData && postData.title}</title>
      </Head>
      {postData && (
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              <DateFormatter dateString={postData.date} />
            </div>
          <div dangerouslySetInnerHTML={{ __html: postData.content }} />
        </article>
      )}
    </Layout>
  )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: PostPath[] = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData: BlogPost = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}

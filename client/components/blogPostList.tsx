import DateFormatter from './date'
import { BlogPostListProps } from '../types/components'

const BlogPostList = (props: BlogPostListProps) => {
  const { blogPosts, handleShowBlog } = props

  return ( 
    <ul className="list-none p-0 m-0">
      {blogPosts.map((post) => (
        <li className="mb-3" key={post ? `${post.slug}` : ''}>
          {post && (
            <>
              <button className="underline" onClick={() => handleShowBlog(post.id)}>{post.title}</button>
              <br />
              {post.updated_at && (
                <small className="text-gray">
                  Updated on <DateFormatter dateString={post.updated_at} />
                </small>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default BlogPostList

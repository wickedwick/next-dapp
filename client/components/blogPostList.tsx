import { NearBlogPost } from '../types/blog'
import Date from './date'

const BlogPostList = ({ blogPosts, handleShowBlog }: { blogPosts: NearBlogPost[], handleShowBlog: (slug: string) => void }) => {
  return (
    <ul className="list-none p-0 m-0">
      {blogPosts.map((post) => (
        <li className="mb-3" key={post ? `${post.slug}` : ''}>
          {post && (
            <>
              <button className="underline" onClick={() => handleShowBlog(post.slug)}>{post.name}</button>
              <br />
              <small className="text-gray">
                Updated on <Date dateString={post.updatedAt} />
              </small>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default BlogPostList

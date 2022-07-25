import DateFormatter from './date'
import { BlogPostProps } from '../types/components'

const BlogPost = (props: BlogPostProps) => {
  const { blogPost, setSelectedPost } = props

  return (
    <>
      {blogPost && (
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
              <div className="bg-white text-gray-dark px-4 py-5 border-b border-gray-200 sm:px-6">
                <button onClick={() => setSelectedPost(null)}>&times;</button>
                <h3 className="font-bold text-xl">{blogPost.title}</h3>
                {blogPost.subtitle && <p>{blogPost.subtitle}</p>}
                {blogPost.postedDate && (
                  <small className="text-gray">
                    <DateFormatter dateString={blogPost.postedDate} />
                  </small>
                )}
                <div dangerouslySetInnerHTML={{ __html: blogPost.body }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BlogPost

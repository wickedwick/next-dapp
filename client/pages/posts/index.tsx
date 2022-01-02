import Link from "next/link"
import { useContext, useEffect, useState } from "react"
import AccessDenied from "../../components/accessDenied"
import Date from '../../components/date'
import Layout from "../../components/layout"
import { AuthContext } from "../../context/AuthContext"
import { GunContext } from "../../context/GunContext"
import { BlogPost } from "../../types/blog"

const Index = () => {
  const { gun } = useContext(GunContext)
  const { user } = useContext(AuthContext)
  const [posts, setPosts] = useState<BlogPost[]>([])

  const handleDelete = (id: string) => {
    const gunPosts = gun.get('posts')
    const allPostsData = []
    const post = gunPosts.get(id)

    if (!post) {
      console.log('Post not found')
      return
    }

    gunPosts
      .get(id)
      .put(null)
    
    gunPosts
      .map()
      .on((data) => {
        if (data && data.id && allPostsData.findIndex(p => p.id === data.id) === -1) {
          allPostsData.push(data)
          setPosts(allPostsData)
        }
      })
  }

  useEffect(() => {
    const allPostsData = []
    
    gun
      .get('posts')
      .map()
      .on((data, key) => {
        if (data && data.id && allPostsData.findIndex(p => p.id === data.id) === -1) {
          const post = data as BlogPost
          post.id = key
          allPostsData.push(post)
          setPosts(allPostsData)
        }
      })
  }, [])

  return (
    <Layout home={false}>
      {user ? (
        <>
        <Link href="/posts/new">
          <a className="px-3 py-2 mb-5 bg-green shadow-sm text-gray-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green text-xl">
            New Blog
          </a>
        </Link>
        {posts && (
          <table className="mt-3">
            <thead>
              <tr>
                <th>Actions</th>
                <th>ID</th>
                <th>Title</th>
                <th>Content</th>
                <th>Date</th>
              </tr> 
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post && post.id}>
                  <td><button onClick={() => handleDelete(post.id)}>Delete</button></td>
                  <td>{post && post.id}</td>
                  <td>{post && post.title}</td>
                  <td>{post && post.content}</td>
                  <td>{post && <Date dateString={post.date} />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        </>
      ) : (
        <AccessDenied />
      )}
    </Layout>
  )
}

export default Index
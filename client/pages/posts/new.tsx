import Link from 'next/link'
import { useContext, useState } from 'react'
import AccessDenied from '../../components/accessDenied'
import Layout from '../../components/layout'
import { AuthContext } from '../../context/AuthContext'
import { GunContext } from '../../context/GunContext'
import { BlogPost } from '../../types/blog'

const New = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const now = new Date()
  const postDate = now.toISOString()
  const { gun } = useContext(GunContext)
  const { user } = useContext(AuthContext)

  const handleSubmit = () => {
    const postData: BlogPost = {
      id: now.valueOf().toString(),
      title,
      content,
      date: postDate,
    }

    gun.get('posts').set(postData)
  }

  return (
    <Layout home={false}>
      {user ? (
        <>
          <div className="mx-auto p-3">
            <h1 className="mb-3">New Blog</h1>
            <input className="block w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea className="block my-3 w-full" value={content} onChange={(e) => setContent(e.target.value)} />
            <button className="px-3 py-2 x-4 border border-green shadow-sm text-gray-light bg-green hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green" onClick={handleSubmit}>Submit</button>
          </div>
          <div className="mx-auto p-3">
            <Link href="/posts">
              <a>← Back to posts</a>
            </Link>
          </div>
        </>
      ) : (
        <AccessDenied />
      )}
    </Layout>
  )
}

export default New
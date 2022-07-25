import { BlogPost, StrapiBlogPost } from './blog'

export type BlogPostProps = {
  blogPost: StrapiBlogPost
  setSelectedPost: (blog: StrapiBlogPost | null) => void
}

export type BlogPostListProps = {
  blogPosts: StrapiBlogPost[]
  handleShowBlog: (id: number) => void
}

export type LayoutProps = {
  children: React.ReactNode
  home: boolean
}

export type PostsProps = {
  posts: BlogPost[]
}

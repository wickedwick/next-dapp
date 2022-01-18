import { BlogPost } from "./blog"

export type LayoutProps = {
  children: React.ReactNode
  home: boolean
}

export type PostsProps = {
  posts: BlogPost[]
}

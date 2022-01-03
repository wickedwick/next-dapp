export type BlogPost = {
  id: string
  title: string
  content: string
  date: string
}

export type BlogPostMetadata = {
  id: string
  title: string
  date: string
}

export type PostPath = {
  params: ParamsPath
}

export type ParamsPath = {
  id: string
}

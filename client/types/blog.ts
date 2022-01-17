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

export type NearContentType = {
  name: string
}

export type NearField = {
  fieldType: string
  name: string
  value: string
}

export type NearBlogPost = {
  name: string
  slug: string
  type: NearContentType
  values: NearField[]
  isPublic: boolean
  createdAt: string
  updatedAt: string
}

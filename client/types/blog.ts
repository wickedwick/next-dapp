export type BlogPost = {
  id: string
  content: string
  date: string
  title: string
}

export type BlogPostMetadata = {
  id: string
  date: string
  title: string
}

export type NearBlogPost = {
  isPublic: boolean
  name: string
  slug: string
  type: NearContentType
  values: NearField[]
  createdAt: string
  updatedAt: string
}

export type NearContentType = {
  name: string
}

export type NearField = {
  fieldType: string
  name: string
  value: string
}

export type ParamsPath = {
  id: string
}

export type PostPath = {
  params: ParamsPath
}

export type StrapiBlogPost = {
  id: number
  body: string
  postedDate?: string
  slug: string
  subtitle?: string
  title: string
  created_at: string
  updated_at: string
}

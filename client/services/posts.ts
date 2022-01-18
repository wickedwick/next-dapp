import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { BlogPost, BlogPostMetadata, ParamsPath, PostPath } from '../types/blog'

const postsDirectory: string = path.join(process.cwd(), 'posts')

export function getSortedPostsData(): BlogPostMetadata[] {
  const fileNames: string[] = fs.readdirSync(postsDirectory)
  const allPostsData: BlogPostMetadata[] = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    } as BlogPostMetadata
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds(): PostPath[] {
  const fileNames: string[] = fs.readdirSync(postsDirectory)
  
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      } as ParamsPath
    } as PostPath
  })
}

export async function getPostData(id: string): Promise<BlogPost> {
  const fullPath: string = path.join(postsDirectory, `${id}.md`)
  const fileContents: string = fs.readFileSync(fullPath, 'utf8')

  const matterResult: matter.GrayMatterFile<string> = matter(fileContents)
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const content: string = processedContent.toString()

  return {
    id,
    content,
    ...matterResult.data
  } as BlogPost
}

import { configure, mount } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { NearBlogPost } from '../../types/blog'
import BlogPostList from '../blogPostList'

configure({ adapter: new Adapter() })

describe('<BlogPostList />', () => {
  const handleShowBlog: (slug: string) => void = jest.fn()
  const blogs: NearBlogPost[] = [
    {
      name: 'Test Blog',
      slug: 'test-blog',
      type: { name: 'blog' },
      values: [
        {
          name: 'TItle',
          value: 'Test Blog',
          fieldType: 'string'
        }
      ],
      isPublic: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      name: 'Test Blog2',
      slug: 'test-blog-2',
      type: { name: 'blog' },
      values: [
        {
          name: 'TItle',
          value: 'Test Blog',
          fieldType: 'string'
        }
      ],
      isPublic: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]

  it('Renders the list of blog posts', () => {
    const wrapper = mount(<BlogPostList blogPosts={blogs} handleShowBlog={handleShowBlog} />)
    expect(wrapper.find('li').length).toBe(2)
  })
})

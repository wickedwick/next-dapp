import { configure, mount } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { StrapiBlogPost } from '../../types/blog'
import BlogPostList from '../blogPostList'

configure({ adapter: new Adapter() })

describe('<BlogPostList />', () => {
  const handleShowBlog: (id: number) => void = jest.fn()
  const date = new Date(2022, 12, 31)
  const blogs: StrapiBlogPost[] = [
    {
      id: 1,
      title: 'Test Blog',
      slug: 'test-blog',
      body: 'This is a post',
      created_at: date,
      updated_at: date
    },
    {
      id: 1,
      title: 'Test Blog2',
      subtitle: 'Blog subtitle',
      postedDate: date,
      slug: 'test-blog-2',
      body: 'This is a post',
      created_at: date,
      updated_at: date
    }
  ]

  it('Renders the list of blog posts', () => {
    const wrapper = mount(<BlogPostList blogPosts={blogs} handleShowBlog={handleShowBlog} />)
    expect(wrapper.find('li').length).toBe(2)
    expect(wrapper).toMatchSnapshot()
  })

  it('Handles blog selection', () => {
    const wrapper = mount(<BlogPostList blogPosts={blogs} handleShowBlog={handleShowBlog} />)
    wrapper.find('button').first().simulate('click')
    expect(handleShowBlog).toHaveBeenCalled()
  })
})

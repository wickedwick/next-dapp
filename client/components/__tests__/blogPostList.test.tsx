import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import BlogPostList from '../blogPostList'
import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import { StrapiBlogPost } from '../../types/blog'

configure({ adapter: new Adapter() })

describe('<BlogPostList />', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
  const handleShowBlog: (id: number) => void = jest.fn()
  const date = new Date(2022, 12, 31).toISOString()
  
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

  beforeEach(() => {
    jest.resetAllMocks()
    wrapper = mount(<BlogPostList blogPosts={blogs} handleShowBlog={handleShowBlog} />)
  })

  it('Renders the list of blog posts', () => {
    expect(wrapper.find('li').length).toBe(2)
    expect(wrapper).toMatchSnapshot()
  })

  it('Handles blog selection', () => {
    wrapper.find('button').first().simulate('click')
    expect(handleShowBlog).toHaveBeenCalled()
  })
})

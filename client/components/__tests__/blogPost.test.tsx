import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import BlogPost from '../blogPost'
import React from 'react'
import { configure, mount, ReactWrapper } from 'enzyme'
import { StrapiBlogPost } from '../../types/blog'

configure({ adapter: new Adapter() })

jest.mock('react-markdown')

describe('<BlogPost />', () => {
  let wrapper: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>
  const setSelectedPost = jest.fn()
  
  const blog: StrapiBlogPost = {
    id: 2,
    body: '',
    slug: 'test-blog',
    title: 'Test Blog',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }

  beforeEach(() => {
    jest.resetAllMocks()
    wrapper = mount(<BlogPost blogPost={blog} setSelectedPost={setSelectedPost} />)
  })

  it('Renders a BlogPost', () => {
    expect(wrapper.find('h3').text()).toBe('Test Blog')
  })

  it('Calls setSelectedPost with null on click of clear button', () => {
    wrapper.find('button').simulate('click')
    expect(setSelectedPost).toHaveBeenCalledWith(null)
  })
})

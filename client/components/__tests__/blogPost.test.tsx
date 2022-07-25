import { configure, mount } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { StrapiBlogPost } from '../../types/blog'
import BlogPost from '../blogPost'

configure({ adapter: new Adapter() })

jest.mock('react-markdown')

describe('<BlogPost />', () => {
  const setSelectedPost = jest.fn()
  const blog: StrapiBlogPost = {
    id: 2,
    title: 'Test Blog',
    slug: 'test-blog',
    body: '',
    created_at: new Date(),
    updated_at: new Date()
  }

  it('Renders a BlogPost', () => {
    const wrapper = mount(<BlogPost blogPost={blog} setSelectedPost={setSelectedPost} />)
    expect(wrapper.find('h3').text()).toBe('Test Blog')
  })

  it('Calls setSelectedPost with null on click of clear button', () => {
    const wrapper = mount(<BlogPost blogPost={blog} setSelectedPost={setSelectedPost} />)
    wrapper.find('button').simulate('click')
    expect(setSelectedPost).toHaveBeenCalledWith(null)
  })
})

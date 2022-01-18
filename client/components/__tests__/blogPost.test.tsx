import { configure, mount } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { NearBlogPost } from '../../types/blog'
import BlogPost from '../blogPost'

configure({ adapter: new Adapter() })

jest.mock('react-markdown')

describe('<BlogPost />', () => {
  const setSelectedPost = jest.fn()
  const blog: NearBlogPost = {
    name: 'Test Blog',
    slug: 'test-blog',
    type: { name: '' },
    values: [
      {
        name: 'TItle',
        value: 'Test Blog',
        fieldType: 'string'
      }
    ],
    isPublic: true,
    createdAt: '',
    updatedAt: ''
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

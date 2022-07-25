import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Nav from '../nav'
import React from 'react'
import { configure, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('nav', () => {
  it('Renders with logout button', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.find('a').length).toBe(3)
    expect(wrapper.find('a').last().text()).toBe('<BsGithub />')
  })
})

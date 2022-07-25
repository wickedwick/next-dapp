import { configure, mount, shallow } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Nav from '../nav';

configure({ adapter: new Adapter() })

describe('nav', () => {
  it('Renders with logout button', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.find('a').length).toBe(3)
    expect(wrapper.find('a').last().text()).toBe('<BsGithub />')
  })
})

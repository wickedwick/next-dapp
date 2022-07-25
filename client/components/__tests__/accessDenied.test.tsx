import AccessDenied from '../accessDenied'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import React from 'react'
import { configure, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('<AccessDenied />', () => {
  it('renders the componenet', () => {
    const wrapper = shallow(<AccessDenied />)
    expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper.find('h1').text()).toBe('Out of Bounds! ✋')
  })
})

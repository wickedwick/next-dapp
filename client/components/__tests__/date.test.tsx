import { configure, shallow } from 'enzyme'
import React from 'react'
import Date from '../date'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

describe('Date', () => {
  it('Renders a time element', () => {
    const wrapper = shallow(<Date dateString="2012-01-12T17:00:00.000Z" />)
    expect(wrapper.find('time').length).toBe(1)
    expect(wrapper.text()).toBe('January 12, 2012')
  })
})

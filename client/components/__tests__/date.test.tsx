import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import DateFormatter from '../date'
import React from 'react'
import { configure, shallow } from 'enzyme'

configure({ adapter: new Adapter() })

describe('Date', () => {
  it('Renders a time element', () => {
    const wrapper = shallow(<DateFormatter dateString={'2022-07-23T20:59:20.156Z'} />)
    expect(wrapper.find('time').length).toBe(1)
    expect(wrapper.text()).toBe('July 23, 2022')
  })
})

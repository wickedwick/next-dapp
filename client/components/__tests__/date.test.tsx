import { configure, shallow } from 'enzyme'
import React from 'react'
import DateFormatter from '../date'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() })

describe('Date', () => {
  const date = new Date('2022-07-23T20:59:20.156Z')
  it('Renders a time element', () => {
    const wrapper = shallow(<DateFormatter dateString={date.toISOString()} />)
    expect(wrapper.find('time').length).toBe(1)
    expect(wrapper.text()).toBe('July 23, 2022')
  })
})

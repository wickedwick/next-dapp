import { configure, shallow } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Nav from '../nav';
import { AuthContext } from '../../context/AuthContext';

configure({ adapter: new Adapter() })

describe('nav', () => {
  it('Renders with logout button', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.find('a').length).toBe(2)
  })
})
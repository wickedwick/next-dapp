import { configure, mount, shallow } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AccessDenied from '../accessDenied';
import { AuthContext } from '../../context/AuthContext';
import { User } from '../../types/user';

configure({ adapter: new Adapter() })

describe('<AccessDenied />', () => {
  it('renders the componenet', () => {
    const wrapper = shallow(<AccessDenied />)
    expect(wrapper.find('h1').length).toBe(1)
    expect(wrapper.find('h1').text()).toBe('Out of Bounds! ✋')
  })
})
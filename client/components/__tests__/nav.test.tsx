import { configure, mount, shallow } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Nav from '../nav';
import { AuthContext } from '../../context/AuthContext';
import { User } from '../../types/user';

configure({ adapter: new Adapter() })

describe('nav', () => {
  it('Renders with logout button', () => {
    const wrapper = shallow(<Nav />)
    expect(wrapper.find('a').length).toBe(4)
    expect(wrapper.find('a').last().text()).toBe('Login')
  })

  it('Renders with logged in user', () => {
    const user: User = {
      id: 1,
      name: 'Test User',
    }
    
    const initialState: { isLoggedIn: boolean, login: (username: string, password: string) => void, logout: () => void, register: (username: string, password: string) => void, user: User | null } = {
      isLoggedIn: false,
      login: (username: string, password: string) => jest.fn(),
      logout: () => jest.fn(),
      register: (username: string, password: string) => jest.fn(),
      user: user
    }

    const wrapper = mount(<AuthContext.Provider value={initialState}><Nav /></AuthContext.Provider>)

    expect(wrapper.find('a').length).toBe(4)
    expect(wrapper.find('a').last().text()).toBe('Logout')
  })
})

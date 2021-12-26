import { configure, mount } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Auth from '../auth';
import { AuthContext } from '../../context/AuthContext';
import { User } from '../../types/user';

configure({ adapter: new Adapter() })

describe('Auth', () => {
  it('Renders the auth component in default state', () => {
    const wrapper = mount(<Auth />)
    expect(wrapper.find('button').length).toBe(1)
    expect(wrapper.find('button').first().text()).toBe('Login or Register')
  })

  it('Renders the login/register form on button press', () => {
    const wrapper = mount(<Auth />)
    wrapper.find('button').first().simulate('click')
    expect(wrapper.find('input').length).toBe(2)
    expect(wrapper.find('button').length).toBe(3)
    expect(wrapper.find('button').at(1).text()).toBe('Login')
    expect(wrapper.find('button').last().text()).toBe('Signup')
  })

  it('Renders the auth component in logged in state', () => {
    const initialState: { isLoggedIn: boolean, login: () => void, logout: () => void, register: () => void, user: User | null } = {
      isLoggedIn: true,
      login: () => jest.fn(),
      logout: () => jest.fn(),
      register: () => jest.fn(),
      user: {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@thing.com',
        createdAt: new Date('2021-01-01T00:00:00.000Z'),
        updatedAt: new Date('2021-01-05T00:00:00.000Z')
      }
    }

    const wrapper = mount(<AuthContext.Provider value={initialState}><Auth /></AuthContext.Provider>)
    expect(wrapper.find('button').text()).toBe('Logout')
  })
})
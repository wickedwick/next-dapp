import { configure, mount, shallow } from 'enzyme'
import React from 'react'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ConnectButton from '../ConnectButton';

configure({ adapter: new Adapter() })

var mockSetAccounts = jest.fn()
jest.mock('../../services/web3', () => {
  return {
    connectToWallet: mockSetAccounts,
  }
})

describe('<ConnectButton />', () => {
  it('Renders', () => {
    const wrapper = shallow(<ConnectButton />)
    expect(wrapper.find('button').length).toBe(1)
  })
  
  it('Calls method when clicked', () => {
    const wrapper = mount(<ConnectButton />)
    wrapper.find('button').simulate('click')
    expect(mockSetAccounts).toHaveBeenCalledTimes(1)
  })
})

import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import ConnectButton from '../ConnectButton'
import React from 'react'
import { configure, shallow } from 'enzyme'

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
})

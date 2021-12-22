import React from 'react'
const EyedentityRegistry = require('../contracts/EyedentityRegistry.json')
import { User } from '../types/user'
import getWeb3 from './web3'

export async function login(setUser: (user: User | null) => void) {
  console.log('login')
  const newUser = {
    id: 1,
    name: 'John Doe',
    email: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  setUser(newUser)

  const web3 = await getWeb3()
  const accounts = await web3.eth.getAccounts()
  const networkId = await web3.eth.net.getId()

  const deployedNetwork = EyedentityRegistry.networks[networkId]
  const instance = new web3.eth.Contract(
    EyedentityRegistry.abi,
    deployedNetwork && deployedNetwork.address,
  )

  const isAuthorized = await instance.methods.isAuthorized(accounts[0]).call()

  if (isAuthorized) {
    // TODO: get user data from GUN
    // setUser()
  }
}

export async function logout(setUser: (user: User | null) => void) {
  setUser(null)
}

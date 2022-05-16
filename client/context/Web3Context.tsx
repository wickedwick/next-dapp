import React from 'react'
import { Web3ContextParams } from '../types/context'

export const Web3Context = React.createContext({
  web3: null,
  accounts: [],
  contract: null,
  setAccounts: () => {},
} as Web3ContextParams)

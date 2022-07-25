import React from 'react'
import { Web3ContextParams } from '../types/context'

export const Web3Context = React.createContext({
  accounts: [],
  contract: null,
  web3: null,
  setAccounts: () => {},
} as Web3ContextParams)

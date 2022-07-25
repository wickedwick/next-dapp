import React from 'react'
import { AppContextParams } from '../types/context'

export const AppContext = React.createContext({
  errorMessage: '',
  isLoading: false,
} as AppContextParams)

import React from 'react'
import { AppContextParams } from '../types/context'

export const AppContext = React.createContext({
  isLoading: false,
  errorMessage: '',
} as AppContextParams)

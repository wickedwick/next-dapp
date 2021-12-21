import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { AuthContext } from '../context/AuthContext'
import '../styles/global.css'
import { User } from '../types/user'
import { login } from '../services/authentication'

function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null)

  const setUserOnLogin = () => {
    console.log('click')
    login(setUser)
  }
  
  const initialState: { isLoggedIn: boolean, login: () => void, logout: () => void, register: () => void, user: User | null } = {
    isLoggedIn: false,
    login: () => setUserOnLogin,
    logout: () => {},
    register: () => {},
    user: user
  }

  return (
    <AuthContext.Provider value={initialState}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default App

import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { AuthContext } from '../context/AuthContext'
import '../styles/global.css'
import { User } from '../types/user'
import { login, logout, signup } from '../services/authentication'
import { user as gunUser } from '../services/user'

function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const initialState: { isLoggedIn: boolean, login: (username: string, password: string) => void, logout: () => void, register: (username: string, password: string) => void, user: User | null } = {
    isLoggedIn: false,
    login: (username: string, password: string) => login(gunUser, setUser, setLoading, setError, username, password),
    logout: () => logout(gunUser, setUser),
    register: (username: string, password: string) => signup(gunUser, setUser, setLoading, setError, username, password),
    user: user
  }

  return (
    <AuthContext.Provider value={initialState}>
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <Component {...pageProps} />
    </AuthContext.Provider>
  )
}

export default App

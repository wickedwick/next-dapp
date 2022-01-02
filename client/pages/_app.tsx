import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import AOS from 'aos'
import { IGunChainReference } from 'gun/types/chain'
import { AuthContext } from '../context/AuthContext'
import { GunContext } from '../context/GunContext'
import { login, logout, signup } from '../services/authentication'
import { db, user as gunUser } from '../services/user'
import { User } from '../types/user'

import "aos/dist/aos.css"
import '../styles/global.css'

function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    })
  }, [])

  const initialState: { isLoggedIn: boolean, login: (username: string, password: string) => void, logout: () => void, register: (username: string, password: string) => void, user: User | null } = {
    isLoggedIn: false,
    login: (username: string, password: string) => login(gunUser, setUser, setLoading, setError, username, password),
    logout: () => logout(gunUser, setUser),
    register: (username: string, password: string) => signup(gunUser, setUser, setLoading, setError, username, password),
    user: user
  }

  const gunState: { gun: IGunChainReference<Record<string, any>, any, false>, gunUser: IGunChainReference<Record<string, any>, any, false> } = {
    gun: db,
    gunUser: gunUser
  }

  return (
    <GunContext.Provider value={gunState}> 
      <AuthContext.Provider value={initialState}>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        <Component {...pageProps} />
      </AuthContext.Provider>
    </GunContext.Provider>
  )
}

export default App

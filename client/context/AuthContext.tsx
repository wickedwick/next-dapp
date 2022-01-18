import React from 'react'

export const AuthContext = React.createContext({
  isLoggedIn: false,
  login: (username: string, password: string) => {},
  logout: () => {},
  register: (username: string, password: string) => {},
  user: null
})

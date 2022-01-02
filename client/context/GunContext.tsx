import { IGunChainReference } from 'gun/types/chain'
import React from 'react'

export const GunContext = React.createContext({
  gun: {} as IGunChainReference<Record<string, any>, any, false>
})
import { IGunChainReference } from 'gun/types/chain'
import { User } from '../types/user'

export async function login(
  gunUser: IGunChainReference<Record<string, any>, any, false>,
  setUser: (user: User | null) => void,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
  username: string,
  password: string): Promise<void> {
    setLoading(true)
    console.log('calling auth')
    gunUser.auth(username, password, ({ soul, err }: any) => {
      setLoading(false)
      setError(err)
      console.log('err', err)
      console.log('soul', soul)
      const userData: User = {
        id: soul,
        name: username,
      }

      if (!err) {
        setUser(userData)
      }
    })  
}

export async function logout(
  gunUser: IGunChainReference<Record<string, any>, any, false>,
  setUser: (user: User | null) => void) {
    gunUser.leave()
    setUser(null)
}

export async function signup(
  gunUser: IGunChainReference<Record<string, any>, any, false>,
  setUser: (user: User | null) => void,
  setLoading: (loading: boolean) => void,
  setError: (error: string | null) => void,
  username: string,
  password: string): Promise<void> {
    setLoading(true)
    gunUser.create(username, password, ({ soul, err }: any) => {
      setLoading(false)
      setError(err)
      const userData: User = {
        id: soul,
        name: username,
      }

      if (!err) {
        setUser(userData)
      }
    })
}

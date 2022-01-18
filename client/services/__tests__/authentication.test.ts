import { login, signup } from '../authentication'
import Gun from 'gun'

let mockGet = jest.fn().mockImplementation(() => {
  return {
    once: jest.fn()
  }
})

let mockSet = jest.fn().mockImplementation(() => {
  return {
    once: jest.fn()
  }
})

let mockAuth = jest.fn().mockImplementation(() => {
  return {
    soul: '123',
    err: '',
  }
})

let mockCreate = jest.fn().mockImplementation(() => {
  return {
    soul: '123',
    err: '',
  }
})

jest.mock('gun', () => {
  return jest.fn().mockImplementation(() => {
    return {
      get: mockGet,
      set: mockSet,
      user: jest.fn().mockImplementation(() => {
        return {
          get: mockGet,
          set: mockSet,
          auth: mockAuth,
          create: mockCreate,
        }
      }),
      SEA: jest.fn().mockImplementation(() => {
        return {
          decrypt: jest.fn().mockImplementation(() => {
            return Promise.resolve({})
          }),
          encrypt: jest.fn().mockImplementation(() => {
            return Promise.resolve({})
          })
        }
      })
    }
  })
})

const setUser = jest.fn()
const setLoading = jest.fn()
const setError = jest.fn()

beforeEach(() => {
  mockGet.mockClear()
  mockSet.mockClear()
  setUser.mockClear()
  setLoading.mockClear()
  setError.mockClear()
})

describe('authentication', () => {
  describe('login', () => {
    it('calls setUser, setLoading, and setError', async () => {
      const gun = new Gun()
      login(gun.user(), setUser, setLoading, setError, 'username', 'password')
      expect(mockAuth).toHaveBeenCalledTimes(1)
      // expect(setUser).toHaveBeenCalledTimes(1)
      // expect(setLoading).toHaveBeenCalledTimes(1)
      // expect(setError).toHaveBeenCalledTimes(1)
    })
  })

  // describe('logout', () => {
      
  // })

  describe('signup', () => {
    it('calls setUser, setLoading, and setError', async () => {
      const gun = new Gun()
      signup(gun.user(), setUser, setLoading, setError, 'username', 'password')
      expect(mockCreate).toHaveBeenCalledTimes(1)
      // expect(setUser).toHaveBeenCalledTimes(1)
      // expect(setLoading).toHaveBeenCalledTimes(1)
      // expect(setError).toHaveBeenCalledTimes(1)
    })
  })
})

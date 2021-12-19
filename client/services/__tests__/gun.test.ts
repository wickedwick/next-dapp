import Gun from 'gun';
import { IGunChainReference } from 'gun/types/chain';
import { DisallowPrimitives, AlwaysDisallowedType } from 'gun/types/types';
import { getItemAsync, setItemAsync } from '../gun'

const mockChainRef: IGunChainReference = {
  once: (callback?: (data: (DisallowPrimitives<IsTop, AlwaysDisallowedType<Record<string, T>>>) | undefined, key: ReferenceKey) => void, option?: {
    wait: number;
}): IGunChainReference<T, ReferenceKey>
}

let mockGet = jest.fn().mockResolvedValue({ once: jest.fn() } as any)
let mockSet = jest.fn()

jest.mock('gun', () => {
  return jest.fn().mockImplementation(() => {
    return {
      get: mockGet,
      set: mockSet
    }
  })
})

// const gun = jest.createMockFromModule('gun')
beforeEach(() => {
  mockGet.mockClear()
  mockSet.mockClear()
})

describe('gun.ts', () => {
  describe('setItem', () => {
    it('should send an item to the gun', async () => {
      const item = { id: '1' }
      await setItemAsync(item)
      // need to assert gun was called
      expect(mockSet).toHaveBeenCalledTimes(1)
    });
  })

  describe('getItem', () => {
    it('should return an item from the gun', async () => {
      // TODO: mock gun and setup a test item
      // gun.get.mockResolvedValue({ id: '1' })
      const item = { id: '123' }
      const dataCallback = jest.fn()
      const result = await getItemAsync<{id: string}>(item.id, dataCallback)
      expect(mockGet).toHaveBeenCalledTimes(1)
    })
  })
})
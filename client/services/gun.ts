import Gun, { SEA } from 'gun'
import { IGunChainReference } from 'gun/types/chain';
import React from 'react';

export async function getItemAsync<T> (db: IGunChainReference<any, any, "pre_root">, id: string,
  dataCallback: React.Dispatch<React.SetStateAction<T>>): Promise<void> {
    const key = "#some-key"
    const chainReference = db.get(id)
    
    chainReference.once(async (data: T, id: string) => {
      const decryptedData = await SEA.decrypt(data, key) as T
      dataCallback(decryptedData)
    })
  }
  
export async function setItemAsync<T> (db: IGunChainReference<any, any, "pre_root">, item: T, key: string): Promise<void> {
  const encryptionKey = "#some-key"
  const encryptedData = await SEA.encrypt(item, encryptionKey)
  const items = db.get(key)
  items.set({ data: encryptedData })
}

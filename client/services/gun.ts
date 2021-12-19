import Gun, { SEA } from 'gun'
import React from 'react';

export async function getItemAsync<T> (id: string,
  dataCallback: React.Dispatch<React.SetStateAction<T>>): Promise<void> {
    const db = new Gun()
    const key = "#some-key"
    const chainReference = db.get(id)
    console.log('chainReference', chainReference)
    chainReference.once(async (data: T, id: string) => {
      const decryptedData = await SEA.decrypt(data, key) as T
      dataCallback(decryptedData)
    })
}

export function setItemAsync<T> (item: T): Promise<T> {
  const db = new Gun()

  return new Promise((resolve, reject) => {
    db.set(item).once(resolve);
  });
}

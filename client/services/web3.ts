import Web3 from 'web3'
const abiData = require('../contracts/CryptoTrustFund.json')

declare var window: any

export const connectToWallet = async (): Promise<Array<string>> => {
  const accounts = await window.ethereum.send('eth_requestAccounts')
  return accounts.result
}

const getWeb3 = (): Promise<Web3> =>
  new Promise((resolve, reject) => {
    window.addEventListener('load', async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum)
        try {
          resolve(web3)
        } catch (error) {
          reject(error)
        }
      }
      else if (window.web3) {
        const web3 = window.web3

        resolve(web3)
      }
      else {
        const provider = new Web3.providers.HttpProvider(
          'http://127.0.0.1:7545'
        )
        const web3 = new Web3(provider)

        resolve(web3)
      }
    })
  })

export default getWeb3

export const contractAddress: string = '0x7C06cfAAc0b8c8601101dA6F22c0344a8DB53F79'

export const abi = abiData.abi

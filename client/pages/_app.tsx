import AOS from 'aos'
import getWeb3, { abi, contractAddress } from '../services/web3'
import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import { AppContext } from '../context/appContext'
import { AppContextParams, Web3ContextParams } from '../types/context'
import { AppProps } from 'next/app'
import { Web3Context } from '../context/web3Context'
import '../styles/global.css'
import 'aos/dist/aos.css'

function App({ Component, pageProps }: AppProps) {
  const [accounts, setAccounts] = useState<Array<string>>([])
  const [contract, setContract] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [web3, setWeb3] = useState<Web3 | null>(null)

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      once: true,
    })

    getWeb3().then(w3 => {
      setWeb3(w3)
      const web3Contract = new w3.eth.Contract(abi, contractAddress)
      setContract(web3Contract)
    })
  }, [])

  const appContextParams: AppContextParams = {
    errorMessage: error,
    isLoading: loading,
    setErrorMessage: setError,
    setLoading,
  }

  const web3ContextParams: Web3ContextParams = {
    accounts,
    contract,
    web3,
    setAccounts,
  }
  
  return (
    <AppContext.Provider value={appContextParams}>
      <Web3Context.Provider value={web3ContextParams}>
          {error && <p>{error}</p>}
          {loading && <p>Loading...</p>}
          <Component {...pageProps} />
      </Web3Context.Provider>
    </AppContext.Provider>
  )
}

export default App

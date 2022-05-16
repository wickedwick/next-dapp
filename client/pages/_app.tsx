import AOS from 'aos';
import getWeb3, { abi, contractAddress } from '../services/web3';
import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { AppProps } from 'next/app';
import '../styles/global.css';
import 'aos/dist/aos.css';
import { Web3Context } from '../context/Web3Context';
import { AppContext } from '../context/AppContext';
import { AppContextParams, Web3ContextParams } from '../types/context';

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [web3, setWeb3] = useState<Web3 | null>(null)
  const [contract, setContract] = useState(null)
  const [accounts, setAccounts] = useState<Array<string>>([])

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    })

    getWeb3().then(w3 => {
      setWeb3(w3)
      const web3Contract = new w3.eth.Contract(abi, contractAddress)
      setContract(web3Contract)
    })
  }, [])

  const appContextParams: AppContextParams = {
    isLoading: loading,
    errorMessage: error,
    setLoading,
    setErrorMessage: setError,
  }

  const web3ContextParams: Web3ContextParams = {
    web3,
    accounts,
    contract,
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

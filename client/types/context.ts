import Web3 from "web3"

export type Web3ContextParams = {
  accounts: Array<string>
  contract: any
  web3: Web3
  setAccounts: (accounts: Array<string>) => void
}

export type AppContextParams = {
  isLoading: boolean
  errorMessage: string
  setLoading: (isLoading: boolean) => void
  setErrorMessage: (errorMessage: string) => void
}

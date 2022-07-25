import { connectToWallet } from '../services/web3'
import { FaWallet } from 'react-icons/fa'
import { useContext } from 'react'
import { Web3Context } from '../context/web3Context'

const ConnectButton = (): JSX.Element => {
  const { accounts, setAccounts } = useContext(Web3Context)
  
  const handleClick = async (): Promise<void> => {
    if (accounts.length > 0) {
      return
    }

    const connectedAccounts = await connectToWallet()
    setAccounts(connectedAccounts)
  }

  return(
    <button
      className="px-3 py-2 m-3 x-4 shadow-sm text-gray-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green text-xl"
      onClick={handleClick}
    >
      <FaWallet />
    </button>
  )
}

export default ConnectButton

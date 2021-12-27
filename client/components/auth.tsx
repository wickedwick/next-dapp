import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

const Auth = (): JSX.Element => {
  const { login, logout, register, user } = useContext(AuthContext)
  const [showForm, setShowForm] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  
  const handleLogin = () => {
    if (username && password) {
      login(username, password)
    } else {
      setError("Please enter a username and password.")
    }

    resetInputs()
  }

  const handleSignup = () => {
    if (username && password) {
      register(username, password)
    } else {
      setError("Please enter a username and password.")
    }

    resetInputs()
  }

  const resetInputs = () => {
    setUsername("")
    setPassword("")
    setShowForm(false)
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {user && (
        <div className="md:col-span-3">
          <p className="block text-center">Hi {user.name}</p>
          <button className="block px-3 py-2 m-3 x-4 border border-purple shadow-sm text-gray-light bg-purple hover:bg-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple" onClick={logout}>Logout</button>
        </div>
      )}
      {/*{!user && !showForm && (
        <div className="md:col-span-3">
          <button className="block px-3 py-2 m-3 x-4 border border-purple shadow-sm text-gray-light bg-purple hover:bg-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple" onClick={() => setShowForm(true)}>Login or Register</button>
        </div>
      )}
      {!user && showForm && (
        <div className="md:col-span-1">
          <button className="block px-3 py-2 m-3 x-4 border border-purple shadow-sm text-gray-light bg-purple hover:bg-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple" onClick={() => setShowForm(false)}>x</button>
        </div>
      )} */}
      {/* {showForm && ( */}
      {!user && (
        <div className="mx-auto p-3">
          <input className="block px-3 py-2 mb-3 w-full" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="block px-3 py-2 mb-3 w-full" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="px-3 py-2 m-3 x-4 border border-purple shadow-sm text-gray-light bg-purple hover:bg-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple" onClick={handleLogin}>Login</button>
          <button className="px-3 py-2 m-3 x-4 border border-purple shadow-sm text-purple bg-gray-light hover:bg-purple hover:text-gray-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple" onClick={handleSignup}>Signup</button>
        </div>
      )}
      {/* )} */}
    </div>
  )
}

export default Auth
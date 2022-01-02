import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"

const Auth = (): JSX.Element => {
  const { login, logout, register, user } = useContext(AuthContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  
  const handleLogin = () => {
    if (username && password) {
      login(username, password)
    } else {
      setError("Please enter a username and password.")
    }

    resetInputs()
  }

  const handleSignup = async () => {
    if (username && password && code) {
      const res = await fetch("/api/authenticator/code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code })
      })
      if (res.status === 200) {
        register(username, password)
      } else {
        setError("Invalid code.")
      }
      
    } else {
      setError("Please enter a username and password.")
    }

    resetInputs()
  }

  const resetInputs = () => {
    setUsername("")
    setPassword("")
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {user && (
        <div className="md:col-span-3">
          <p className="block text-center">Hi {user.name}</p>
          <button className="block px-3 py-2 m-3 x-4 border border-green shadow-sm text-gray-light bg-green hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green" onClick={logout}>Logout</button>
        </div>
      )}
      {!user && (
        <div className="mx-auto p-3">
          <input className="block px-3 py-2 mb-3 w-full" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="block px-3 py-2 mb-3 w-full" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input className="block px-3 py-2 mb-3 w-full" type="password" value={code} onChange={(e) => setCode(e.target.value)} />
          <button className="px-3 py-2 m-3 x-4 border border-green shadow-sm text-gray-light bg-green hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green" onClick={handleLogin}>Login</button>
          <button className="px-3 py-2 m-3 x-4 border border-green shadow-sm text-green bg-gray-dark hover:bg-green hover:text-gray-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green" onClick={handleSignup}>Signup</button>
        </div>
      )}
    </div>
  )
}

export default Auth
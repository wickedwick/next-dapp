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
      {user ? (
        <>
          <p>Hi {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={() => setShowForm(true)}>Login or Register</button>
        </>
      )}
      {showForm && (
        <>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Signup</button>
        </>
      )}
    </div>
  )
}

export default Auth
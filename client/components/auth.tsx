import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

const Auth = (): JSX.Element => {
  const { login, logout, register, user } = useContext(AuthContext)
  
  const handleLogin = () => {
    console.log('clicked login button')
    login()
  }

  return (
    <div>
      {user ? (
        <>
          <p>Hi {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>Login</button>
          <button onClick={() => console.log("wow")}>Register</button>
        </>
      )}
    </div>
  )
}

export default Auth
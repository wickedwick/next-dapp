import Link from "next/link"
import { useContext } from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { AuthContext } from "../context/AuthContext"

const Nav = (): JSX.Element => {
  const { user } = useContext(AuthContext)
  return (
    <nav className="bg-gray">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link href="/">
              <a className="px-3 py-2 m-3 x-4 shadow-sm text-gray-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green text-xl">Wickham.io</a>
            </Link>
          </div>
          <div className="flex-1 flex items-end justify-end">
            <Link href="https://www.linkedin.com/in/travis-wickham-csd-66273a69/">
              <a className="px-3 py-2 m-3 x-4 shadow-sm text-gray-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green text-xl" target="_blank">
                <BsLinkedin />
              </a>
            </Link>
            <Link href="https://github.com/wickedwick">
              <a className="px-3 py-2 m-3 x-4 shadow-sm text-gray-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green text-xl" target="_blank">
                <BsGithub />
              </a>
            </Link>
            <Link href="/authenticate">
              <a className="px-3 py-2 m-3 x-4 border border-green shadow-sm text-gray-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green">{user ? 'Logout' : 'Login'}</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
import React from "react"
import { Link } from "react-router-dom"
import * as ROUTES from "../../config/routeConstants"
import useAuth from "../../context/AuthContext/AuthContext"
// import Logo from "assets/Logo.png"

const Navbar = () => {
  const { currentUser, logoutUser } = useAuth()

  const WhenLoggedIn = () => (
    <>
      <button
        onClick={logoutUser}
        className="button is-link has-text-centered is-2"
      >
        Log Out
      </button>
    </>
  )

  const PromptSignIn = () => (
    <>
      <Link
        to={ROUTES.LOGIN}
        className="navbar-item button is-info has-text-centered m-2"
      >
        <p>Login</p>
      </Link>

      <Link
        to={ROUTES.SIGNUP}
        className="navbar-item button is-link has-text-centered m-2"
      >
        <p>Signup</p>
      </Link>
    </>
  )

  return (
    <>
      <nav className="navbar is-primary pr-3 pl-3" role="navigation">
        <div className="navbar-brand">
          <Link to={ROUTES.HOME} className="navbar-item">
            {/* <img className="image is-32x32" src={WooferIcon} alt="Woofer Logo"></img> */}
            {/* <img className="image" src={Logo} alt="Logo"></img> */}
            <p className="title is-2">LaaS</p>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <Link
              to={ROUTES.SIGNUP}
              className="navbar-item button is-info has-text-centered m-2"
            >
              <p>Source Code</p>
            </Link>
            {(currentUser) ? <WhenLoggedIn /> : <PromptSignIn />}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
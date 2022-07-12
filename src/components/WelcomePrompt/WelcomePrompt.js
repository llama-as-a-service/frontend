import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import useAuth from "../../context/AuthContext/AuthContext"
import * as ROUTES from "../../config/routeConstants"
import ApiCaller from "./ApiCaller"

const WelcomePrompt = () => {
  const { currentUser } = useAuth()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    if (currentUser) {
      setIsLoggedIn(true)
    }
  }, [currentUser])

  return (
    <div className="WelcomePrompt hero-body">
      {(!isLoggedIn) ? (
        <>
          <h2 className="title">Please Sign In</h2>

          <Link
            to={ROUTES.LOGIN}
            className="navbar-item button is-link has-text-centered m-2 is-medium"
          >
            <p>Login</p>
          </Link>

          <Link
            to={ROUTES.SIGNUP}
            className="navbar-item button is-primary has-text-centered m-2 is-medium"
          >
            <p>Signup</p>
          </Link>
        </>
      ) : <ApiCaller />}
    </div>
  )
}

export default WelcomePrompt
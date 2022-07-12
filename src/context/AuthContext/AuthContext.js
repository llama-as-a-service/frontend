import React, { useState, useContext, useEffect } from "react"
import PropTypes from "prop-types"
import * as authUser from "../../api/auth"
import * as ROUTES from "../../config/routeConstants"
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext()
const startUser = null

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(startUser)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  // Automatic Login!
  useEffect(() => {
    authUser.checkLoginStatus((authenicatedUser) => {
      if (authenicatedUser) {
        setCurrentUser(authenicatedUser)
      }
      setLoading(false)
    }, [])
  }, [])

  function loginUser(email, password, errorCallback) {
    setLoading(true)
    authUser.signInWithEmailAndPassword(email, password, (user) => {
      setCurrentUser(user)
      navigate(ROUTES.HOME)
      setLoading(false)
    }, errorCallback)
  }

  function signupUser(accountDetails, errorCallback) {
    setLoading(true)
    authUser.createUserWithEmailAndPassword(
      accountDetails,
      (user) => {
        setCurrentUser(accountDetails)
        navigate(ROUTES.HOME)
        setLoading(false)
      },
      errorCallback
    )
  }

  const logoutUser = () => {
    // setLoading(true)
    authUser.signOut()
    navigate(ROUTES.HOME)
    setCurrentUser(null)
    window.location.reload()
    setLoading(false)
  }

  const value = {
    loading,
    currentUser,
    loginUser,
    logoutUser,
    signupUser,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => useContext(AuthContext)

export default useAuth

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
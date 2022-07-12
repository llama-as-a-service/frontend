/* eslint-disable react/display-name */
import React from "react"
import { HOME, LOGIN } from "../../config/routeConstants"
import useAuth from "../../context/AuthContext/AuthContext"
import { Navigate } from "react-router-dom"

const withAuthRedirect =
  (Component, isAuthPage = false) =>
    () => {
      // Get the current user from AuthContext
      const { currentUser } = useAuth()

      if (currentUser && Object.keys(currentUser).length > 0) {
        if (isAuthPage) {
          return <Navigate to={HOME} />
        } else {
          return <Component />
        }
      } else {
        if (isAuthPage) {
          return <Component />
        } else {
          return <Navigate className="redirect" to={LOGIN} />
        }
      }
    }

export default withAuthRedirect
import React from "react"
import PropTypes from "prop-types"
import { AuthProvider } from "../../context/AuthContext/AuthContext"

import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"

const ViewLayout = ({ children }) => {
  return (
    <React.Fragment>
      <AuthProvider>
        <Navbar />
        <div className="container">{children}</div>
        <Footer />
      </AuthProvider>
    </React.Fragment>
  )
}

export default ViewLayout

ViewLayout.propTypes = {
  children: PropTypes.any.isRequired,
}
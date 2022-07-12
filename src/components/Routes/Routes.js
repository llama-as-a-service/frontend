import React from "react"
import { Route, Routes } from "react-router-dom"
import * as ROUTES from "../../config/routeConstants"
import SignupPage from "../../Pages/SignupPage/SignupPage"
import LoginPage from "../../Pages/LoginPage/LoginPage"
import HomePage from "../../Pages/HomePage/HomePage"

const RoutesComponent = () => (
  <>
    <Routes>
      <Route element={HomePage} />
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={`${ROUTES.SIGNUP}`} element={<SignupPage />} />
      <Route path={`${ROUTES.LOGIN}`} element={<LoginPage />} />
      {/* <Route component={FourOhFour} /> */}
    </Routes>
  </>
)

export default RoutesComponent
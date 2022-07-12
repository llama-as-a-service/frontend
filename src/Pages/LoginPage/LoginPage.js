import React from "react"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import AccountForm from "../../components/AccountForm/AccountForm"
import * as ROUTES from "../../config/routeConstants"
import useAuth, { AuthProvider } from "../../context/AuthContext/AuthContext"
import { Helmet } from 'react-helmet'

const LoginPage = () => {
  const { loginUser } = useAuth()

  const handleLogin = (formEntries, errorCallback) => {
    loginUser(formEntries["email"], formEntries["password"], errorCallback)
  }

  const loginFields = [
    {
      name: "email",
      placeholder: "Email",
    },
    {
      name: "password",
      placeholder: "Password",
    },
  ]

  return (
    <div>
      <Helmet>
        <title>{'Login - Llama as a Service (LaaS)'}</title>
        <meta name="description" content="Llama as a Service (LaaS) for generating random llama images" />
      </Helmet>

      <AccountForm
        SubmitLabel="Log in"
        FormTitle="Log In"
        FormFields={loginFields}
        WrongFormLabel={"Don't have an account?"}
        CorrectionFormName={"Sign Up"}
        CorrectionFormLink={ROUTES.SIGNUP}
        handleSubmit={handleLogin}
      />
    </div>
  )
}

const WrappedPage = (props) => (
  <AuthProvider>
    <LoginPage {...props} />
  </AuthProvider>
)

const isAuthPage = true
export default withAuthRedirect(WrappedPage, isAuthPage)
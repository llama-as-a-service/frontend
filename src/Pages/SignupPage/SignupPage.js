import React from "react"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import AccountForm from "../../components/AccountForm/AccountForm"
import * as ROUTES from "../../config/routeConstants"
import useAuth, { AuthProvider } from "../../context/AuthContext/AuthContext"
import { Helmet } from 'react-helmet'

const signupFields = [
  {
    name: "first_name",
    placeholder: "First Name",
  },
  {
    name: "last_name",
    placeholder: "Last Name",
  },
  {
    name: "email",
    placeholder: "Email",
  },
  {
    name: "password",
    placeholder: "Password",
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
  },
]

const SignupPage = () => {
  const { signupUser } = useAuth()

  const handleSignup = (formEntries, errorCallback) => {
    const formCompleted = signupFields.every(({ name: expectedKey }) => {
      return formEntries[expectedKey]
    })

    const nameValid = formEntries["first_name"].length <= 15
    const passwordsMatch = formEntries["password"] === formEntries["confirmPassword"]

    if (formCompleted && nameValid && passwordsMatch) {
      signupUser(formEntries, errorCallback)
    }
  }

  return (
    <div>
      <Helmet>
        <title>{'Login - Llama as a Service (LaaS)'}</title>
        <meta name="description" content="Llama as a Service (LaaS) for generating random llama images" />
      </Helmet>

      <AccountForm
        SubmitLabel="Sign Up"
        FormTitle="Sign Up"
        FormFields={signupFields}
        WrongFormLabel={"Already have an account?"}
        CorrectionFormName={"Log In"}
        CorrectionFormLink={ROUTES.LOGIN}
        handleSubmit={handleSignup}
      />
    </div>
  )
}

const WrappedPage = (props) => (
  <AuthProvider>
    <SignupPage {...props} />
  </AuthProvider>
)

const isAuthPage = true
export default withAuthRedirect(WrappedPage, isAuthPage)
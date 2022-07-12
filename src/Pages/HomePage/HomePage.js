import React from "react"
import useAuth from "../../context/AuthContext/AuthContext"
import WelcomePrompt from "../../components/WelcomePrompt/WelcomePrompt"
import { Helmet } from 'react-helmet'

const HomePage = () => {
  const { loading } = useAuth()

  return (
    <div className="HomePage container mt-4">
      <Helmet>
        <title>{'Llama as a Service (LaaS)'}</title>
        <meta name="description" content="Llama as a Service (LaaS) for generating random llama images" />
      </Helmet>

      {loading ?
        <div className="section is-vcentered">
          <div className="columns  is-flex is-vcentered">
            <div className="column is-6 mx-auto">
              <h2 className="title is-2">
                <div className="loader-wrapper mx-auto">
                  <div className="loader is-loading mx-auto"></div>
                </div>
              </h2>
            </div>
          </div>
        </div>
        : (
          <>
            <div className="hero">
              <div className="hero-head">
                <h2 className="title is-4">
                  World's first Llama as a Service (LaaS)
                </h2>
                <h4 className="subtitle">
                  Retreive random Llama Images
                </h4>
              </div>

              <WelcomePrompt />
            </div>
          </>
        )}
    </div>
  )
}

export default HomePage
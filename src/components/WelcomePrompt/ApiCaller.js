import React, { useState } from "react"
import * as imagesAPI from "../../api/images"
import config from "../../config"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'

const URL = config.GATEWAY_API_URL

const sampleURL = "https://images.theconversation.com/files/337593/original/file-20200526-106811-ql6d51.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"

const ApiCaller = () => {
  const [fetchResult, setFetchResult] = useState(false)
  const [loading, setLoading] = useState(false)
  // const [errorMessage, setErrorMessage] = useState(false)

  const handleFetch = () => {
    setLoading(true)
    imagesAPI.fetchImage((result) => {
      setLoading(false)
      setFetchResult(result.message)
    }, (error) => {
      setLoading(false)
      console.error(error)
      // setErrorMessage("Unable to retrieve image")
    })
  }

  const copyURL = () => { navigator.clipboard.writeText(URL) }

  return (
    <div className="WelcomePrompt">
      <div className="hero-body">
        <div className="columns is-mobile is-centered">
          <button onClick={copyURL} className="button is-info">
            <FontAwesomeIcon icon={faCopy} className="fa-lg" />
          </button>
          <input disabled className="input column is-narrow is-5" type="text" value={`${URL}/random`} />
          <button onClick={handleFetch} className="button is-link">Fetch!</button>
        </div>
        <br />

        <div className="container">
          <h3 className="is-6">JSON</h3> <br />
          <div className="columns is-mobile is-centered">
            <pre className="has-text-left">
              <code>
                {`{\n  "message": "${fetchResult || sampleURL}"\n}`}
              </code>
            </pre>
          </div>
        </div>

        {
          loading ? (
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
          ) : (
            <>
              {fetchResult && (
                <div className="section">
                  <h3 className="is-6">IMAGE</h3> <br />
                  <div className="columns is-mobile is-centered">
                    <div className="column">
                      <br />
                      <p><a href={fetchResult}>{fetchResult}</a></p>
                      <br />
                      <img alt="Llama" src={fetchResult}></img>

                    </div>
                  </div>
                </div>
              )}
            </>
          )
        }

      </div >
    </div >
  )
}

export default ApiCaller
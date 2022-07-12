import React, { useState } from "react"
import * as imagesAPI from "../../api/images"
import config from "../../config"

const URL = config.GATEWAY_API_URL

const sampleURL = "https://images.theconversation.com/files/337593/original/file-20200526-106811-ql6d51.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"

const ApiCaller = () => {
  const [fetchResult, setFetchResult] = useState(false)
  // const [errorMessage, setErrorMessage] = useState(false)

  const handleFetch = () => {
    imagesAPI.fetchImage((result) => {
      setFetchResult(result.message)
    }, (error) => {
      console.error(error)
      // setErrorMessage("Unable to retrieve image")
    })
  }

  return (
    <div className="WelcomePrompt">
      <div className="hero-body">
        <div class="columns is-mobile is-centered">
          <input disabled className="input column is-narrow is-5" type="text" value={`${URL}/random`} />
          <button onClick={handleFetch} className="button is-primary">Fetch!</button>
        </div>
        <br />

        <div className="container">
          <h3 className="is-6">JSON</h3> <br />
          <div class="columns is-mobile is-centered">
            <pre className="has-text-left">
              <code>
                {`{\n  "message": "${fetchResult || sampleURL}"\n}`}
              </code>
            </pre>
          </div>
        </div>

        {
          fetchResult && (
            <div className="section">
              <h3 className="is-6">IMAGE</h3> <br />
              <div class="columns is-mobile is-centered">
                <div className="column">
                  <br />
                  <p><a href={fetchResult}>{fetchResult}</a></p>
                  <br />
                  <img alt="Llama" src={fetchResult}></img>

                </div>
              </div>
            </div>
          )
        }
      </div >
    </div >
  )
}

export default ApiCaller
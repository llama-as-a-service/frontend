import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
// import Logo from "assets/Logo.png"

const AccountForm = (props) => {
  const {
    CorrectionFormLink,
    FormFields,
    WrongFormLabel,
    CorrectionFormName,
    SubmitLabel,
    FormTitle,
    handleSubmit,
  } = props

  const [formEntries, setFormEntries] = useState({})
  const [formCompleted, setFormCompleted] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormEntries((prevEntries) => ({
      ...prevEntries,
      [name]: value,
    }))
  }

  const submitClass = "button is-medium is-primary"
  const handleClick = (e) => {
    e.preventDefault(formCompleted)

    const completionStatus =
      Object.values(formEntries).length === Object.keys(FormFields).length
    setFormCompleted(completionStatus)

    if (completionStatus === true) {
      handleSubmit(formEntries, (error) => {
        if (error) {
          setErrorMessage(error)
        }
      })
    }
  }

  return (
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered is-half">
          <div className="column is-half">
            <form className="box has-text-centered">
              {/* <div className="field has-text-centered">
                <img
                  className=" has-text-centered"
                  width="167"
                  src={Logo}
                  alt="Logo"
                ></img>
              </div> */}

              <h2 className="title">{FormTitle}</h2>

              {errorMessage && (
                <div className="notification is-danger">
                  <button className="delete" onClick={() => setErrorMessage("")}></button>
                  {errorMessage}
                </div>
              )}

              {FormFields.map(({ type, name, placeholder }, i) => (
                <div className="field" key={i}>
                  <label htmlFor="" className="label">
                    {placeholder}
                  </label>
                  <input
                    key={i}
                    onChange={handleChange}
                    type={type || name}
                    name={name}
                    className="input"
                    value={formEntries[name] || ""}
                    placeholder={placeholder}
                  ></input>
                </div>
              ))}

              <button className={submitClass} onClick={handleClick}>
                {SubmitLabel}
              </button>
              <hr />
              <p>{WrongFormLabel}</p>

              <div>
                <Link to={CorrectionFormLink}>{CorrectionFormName}</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountForm

AccountForm.propTypes = {
  CorrectionFormLink: PropTypes.string.isRequired,
  FormFields: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  WrongFormLabel: PropTypes.string.isRequired,
  CorrectionFormName: PropTypes.string.isRequired,
  SubmitLabel: PropTypes.string.isRequired,
  FormTitle: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}
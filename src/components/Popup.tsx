import React from 'react'
import "./Popup.css"

const Popup = () => {
  return (
    <div className="popupContainer">
        <span className="material-symbols-outlined popupIcon">
            info
        </span>
        <p className="popupText">
            Enter an email and password. <br/> The credentials will be stored in
            localStorage to simulate a login session.
        </p>
    </div>
  )
}

export default Popup

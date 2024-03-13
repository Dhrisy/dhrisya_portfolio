import React from 'react'
import "./CustomAlert.css"

function CustomAlert({message, onClose}) {
  return (
    <div>
      <div>{message}</div>
      <button onClick={onClose}>ok</button>
    </div>
  )
}

export default CustomAlert

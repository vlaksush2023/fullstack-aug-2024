import React, { useState } from 'react'

export default function InputFiled() {
    //data (Model)
    const [message,setMessage] = useState("hello")

    // logical code (Controller)
    const changeMessage = (event) => {
        setMessage(event.target.value)
    } 

  return (
    // look and feel - View
    <div>
      <h2>Input Filed</h2>
      Message 
      <input 
        type='text'
        value={message} 
        onChange={changeMessage}
        />

      <p>you typed {message}</p>
    </div>
  )
}

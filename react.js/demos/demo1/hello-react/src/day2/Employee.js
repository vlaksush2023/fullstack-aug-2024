import React, { useState } from 'react'

export default function Employee({empCount,empHandler}) {

    const empAddHander = () => {
        empCount++;//0 => 1
        empHandler(empCount); //1
    }

  return (
    <div>
      <h4>Employees - {empCount}</h4>
      <button onClick={empAddHander}>Add</button>
    </div>
  )
}

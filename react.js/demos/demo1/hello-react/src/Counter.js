import React, { useState } from 'react'
export default function Counter() {

 const [count,setCount] =  useState(0)

  return (
    <div>
      <h2>
        Registration Count - {count}

        <div>
        <button onClick={() => setCount(count+1)}>Registration</button>
        </div>
      </h2>
    </div>
  )
}

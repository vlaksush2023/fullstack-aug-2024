import React, { useState } from 'react'

export default function GreetingComponent() {
    const [greeting,setGreeting] = useState("Hello User!");

    //functional test / E2E 


    const changeGreeting = () => {
        setGreeting("Welcome Guest!");
    }

  return (
    <div>
    <h1 data-testid="greeting-message">{greeting}</h1>  
    <button testid="b1" onClick={changeGreeting}>Change Greeting</button>

    </div>
  )
}

import React from 'react'

export default function Student({studCount,studHandler}) {

    const studAddHandler = () => {
        studCount++;
        studHandler(studCount)
    }


  return (
    <div>
      <h4>Students - {studCount} </h4>
      <button onClick={studAddHandler}>Add</button>
    </div>
  )
}

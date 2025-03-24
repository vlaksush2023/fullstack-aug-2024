import React,{useState} from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponet() {

const [count,setCount] = useState(0)
console.log("parent rendered!")
  return (
    <div>
      <h3>Parent Component - {count} </h3>
      <button onClick={() => setCount(count+1) }>Increment Counter</button>
      <ChildComponent />
    </div>
  )
}

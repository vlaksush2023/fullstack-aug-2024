import React,{useContext} from 'react'
import NameContext from './NameContext'

export default function C() {
    const {org,employeeList} = useContext(NameContext) // obj => org, employeeList
  return (
    <div style={{border:"2px solid red"}}>
      <h3>C Component -{org}</h3>

    {
        employeeList.map( emp => (
            <p>{emp.id} - {emp.name} - {emp.salary} </p>
        ))
    }

    </div>
  )
}

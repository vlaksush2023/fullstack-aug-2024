import React, { memo, useState, useMemo, useCallback } from 'react'

const AddEmployee = ({onAdd}) => {

    const handleAddEmployee =  (e) => {
        e.preventDefault();
        const newName = e.target.name.value;
        const newSalary = e.target.salary.value;
        console.log("adding employee ...")
        onAdd(newName,newSalary)
        e.target.reset();
    }

    return (
        <div>
            <form onSubmit={handleAddEmployee}>
                <input type="text" name="name" placeholder="Enter name" />
                <input type="text" name="salary" placeholder="Enter Salary" />
                <button type="submit">Add Employee</button>
            </form>
        </div>
    )
}


const EmployeeList = memo(({ employees }) => {
    console.log("EmployeeList rendered!");

    return (
        <div>
            {
                employees.map((emp) => {
                    return <p>{emp.id} - {emp.name} {emp.salary} </p>
                })
            }
        </div>
    )
})

export default function EmployeeManagement() {
    const [filter, setFilter] = useState('')
  

    const [employees,setEmployees] = useState([
        { id: 101, name: "bala", salary: 1000 },
        { id: 102, name: "peter", salary: 2000 },
        { id: 103, name: "mohammed", salary: 3000 },
    ])

    const filteredEmployees = useMemo(() => {
        console.log("Filtering employees");
        return employees.filter((emp) => {
            return emp.name.toLowerCase().includes(filter.toLowerCase())
        })
    },[filter,employees])

    const addHander = useCallback ( (newName,newSalary) => {

        console.log("addEmployee invoked...")

        setEmployees((prevEmployees) =>{
            const lastId = prevEmployees.length > 0  ? Math.max(...prevEmployees.map(emp => emp.id)) : 101
            const newId = lastId + 1;
            return [...prevEmployees, {id:newId, name:newName, salary:newSalary}]
        })
    },[]) 
        
  
    console.log("Rendering employeemanagement component ")

    return (
        <div>
         
            <input type="text"
                placeholder="Filter by name "
                value={filter}
                onChange={(e) => { setFilter(e.target.value) }}
            />

            <EmployeeList employees={filteredEmployees} />

            <AddEmployee onAdd={addHander}/>

        </div>
    )
}

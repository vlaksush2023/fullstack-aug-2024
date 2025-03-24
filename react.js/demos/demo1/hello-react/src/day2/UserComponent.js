import React, { useEffect, useState } from 'react'

export default function UserComponet() {
    
    const [userList,setUserList] = useState([]);

    useEffect( () => {
       fetch('https://randomuser.me/api/')
       .then( res => res.json())
       .then(res => setUserList(res.results)) 
    },[])


  return (
    <div>
      <h3> User Details </h3>
    
        <table border="1" width="70%" align="center">
            <tr>
                <td>Name</td>
                <td>Email</td>
            </tr>

            {
                userList.map( (user) => {
                    return <tr>
                        <td> {user.name.title}  {user.name.first} {user.name.last} </td>
                        <td>{user.email}</td>
                    </tr>
                })
            }

        </table>

        <br /><br />

    </div>
  )
}

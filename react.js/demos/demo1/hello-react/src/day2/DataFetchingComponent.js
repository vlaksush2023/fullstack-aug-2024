import React, { useEffect, useState } from 'react'

export default function DataFetchingComponent() {

  let [a, setA] = useState(0);
  let [b, setB] = useState(0);

  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(res => {
          setUserList(res.slice(0,5))
          setLoading(false)
        }) // .then(res => console.log(res))
        .catch(error => console.log("Error fetching data : " + error))
      },2000)
      
    }, [])//dependency list
  



  return (
    <div>
      <h3> User Details  {a} - {b} </h3>

      <table border="1" width="70%" align="center">
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Username</td>
        </tr>

        { loading ? (
          <tr>
            <td colspan="3">Loading...</td>
          </tr>
        ) :

          (
              userList.map((user) => {
                return <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                </tr>
              })
            
          )
        }



      </table>

      <br /><br />
      <button onClick={() => { setA(a++) }}>B1</button> &nbsp;
      <button onClick={() => { setB(b++) }}>B2</button>
    </div>
  )
}

// {/* {JSON.stringify(data)} */}


//   {/* {
//   userList.map((user) => {
//       return <p> {user.id} - {user.name} - {user.username} </p>
//   } )
//  }  */}

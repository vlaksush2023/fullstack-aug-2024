import React, {useRef} from 'react'

export default function LoginForm2() {

    // const usernameRef = useRef() ;
    // const passwordRef = useRef() ;

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        const username  = document.getElementById("username").value
        // const username  = e.target.elements.username.value;
        const password  = e.target.elements.password.value;

        if(!username || !password)
            alert("Please fill all the fields")
        else{
            console.log("Username is "+username)
            console.log("Password is "+password)
        }
    }

  return (
    <div>
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username"  /> 
                </div>

                <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" /> 
                </div>

                <div>
                <button type="submit">Login</button>
                </div>
            </form>
        </div>
  )
}

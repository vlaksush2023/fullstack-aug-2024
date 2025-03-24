import React, { useState } from 'react'
import './LoginStyle.css';

//Controlled  Component
export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
       
        if(!username || !password)
            alert("Please fill all the fields")
        else{
            console.log("Username is "+username)
            console.log("Password is "+password)
        }
    }

    return (
        <div className="div1">
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" value={username}
                    onChange={ (e) => setUsername(e.target.value)}
                    /> 
                </div>

                <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={password}
                    onChange={ (e) => setPassword(e.target.value)}/>
                </div>

                <div>
                <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}

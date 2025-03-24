import React, { useReducer } from 'react'

const formReducer = (state,action) => {
    switch(action.type) {

        case 'SET_USERNAME':
            return {...state,username:action.value}

        case 'SET_PASSWORD':
            return {...state,password:action.value}
        
        case 'RESET':
            return {username: '', password: ''}
        default :
        return state;
    }
}

//useReducer Demo
export default function LoginForm() {

    const [formState, dispatch] = useReducer(formReducer, { username: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault();

        const {username,password} = formState;

        if(!username || !password)
            alert("Please fill all the fields")
        else{
            console.log("Username is "+username)
            console.log("Password is "+password)

            dispatch({type:'RESET'})
        }


    }

    return (
        <div>
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" 
                    onChange = { (e) => dispatch({type:'SET_USERNAME', value:e.target.value})}
                    />
                </div>

                <br />
                <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password"
                    onChange = { (e) => dispatch({type:'SET_PASSWORD', value:e.target.value})}

                    />
                </div>

                <div>
                    <button type="submit">Login</button>
                </div>

                {JSON.stringify(formState)}

            </form>
        </div>
    )
}

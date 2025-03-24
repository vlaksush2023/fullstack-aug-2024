import React from 'react'
import useFormFields from './useFormFields';



//Custom Hook Demo
export default function LoginForm2() {

    const [formState,handleChange,resetFields] = useFormFields({username:'',password:''})

    const handleSubmit = (e) => {
        e.preventDefault();

        const {username,password} = formState;

        if(!username || !password)
            alert("Please fill all the fields")
        else{
            console.log("Username is "+username)
            console.log("Password is "+password)

            resetFields();
            
        }


    }

    return (
        <div>
            <h3>Login Page</h3>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                    name="username" 
                    value={formState.username}
                    onChange = {handleChange}
                    />
                </div>

                <br />
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                    name="password" type="password"
                    value={formState.password}
                    onChange = {handleChange}
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

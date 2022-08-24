import React from 'react';
import { useState } from 'react';

const Login = ({setUser}) => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');




    const handleLogin = (e) => {
        e.preventDefault();

        fetch('http://127.0.0.1:3000/login', {
            method: "POST",
            headers: { "Content-Type":"application/json",},
            body: JSON.stringify({ username, password }),
        })
        .then(res => res.json())
        .then(res => {
            if(res.ok){
                setUser(res)
            }else{
                alert("user has not been found")
            }
        })
    };





    return ( 
        <div>
            <div>
                <form onSubmit={(e)=>{handleLogin(e)}}>
                    <label> Login:
                        <input type="text" name="username" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}></input>
                        <input type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                    </label>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
        </div>
     );
}
 
export default Login;
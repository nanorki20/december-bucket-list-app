import { useState } from "react";

const SignUp = ({setUser}) => {

    const [ name, setName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');



    const handleSignUp = (e) => {
        e.preventDefault();

        fetch('http://127.0.0.1:3000/signup', {
            method: "POST",
            headers: { "Content-Type":"application/json",},
            body: JSON.stringify({ name, username, password }),
        })
        .then(res => res.json())
        .then(res => {
            if(res.ok){
                setUser(res)
            }else{
                alert("Ops! something wrong is not right")
            }
        })
    };


    return ( 
        <div>
        <div>
            <form onSubmit={(e)=>{handleSignUp(e)}}>
                <label> SignUp:
                    <input type="text" name="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}></input>
                    <input type="text" name="username" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}></input>
                    <input type="password" name="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                </label>
                <input type="submit" value="submit"></input>
            </form>
        </div>
    </div>
     );
}
 
export default SignUp;
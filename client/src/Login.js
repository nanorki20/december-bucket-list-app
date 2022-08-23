import React from 'react';

const Login = () => {
    return (
        <div>
            <form >
                <label> Login:
                    <input type="text" name='username'  placeholder="Username" ></input>
                    <input type="password" name='password'  placeholder="Password" ></input>
                </label>
                <input type="submit" value="Submit"  />
            </form>
        </div>
     );
}
 
export default Login;
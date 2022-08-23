import React from 'react';


const SignUp = () => {
    return ( 
        <div>
            <form >
                <label> Sign Up:
                    <input type="text" name='username'  placeholder="Username" ></input>
                    <input type="password" name='password'  placeholder="Password" ></input>
                </label>
                <input type="submit" value="Submit"  />
            </form>
        </div>
     );
}
 
export default SignUp;
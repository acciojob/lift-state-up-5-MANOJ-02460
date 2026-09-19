import React, { useState } from 'react'

const Login = ({isLoggedIn, onLogin}) => {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    if(userName.trim() === "" || password.trim()===""){
        return;
    }
    onLogin()
    
    
  }
  return (
    <div>

        {isLoggedIn ? (
            <h2>You are Logged in!</h2>
        ):(
        <form onSubmit={handleSubmit}>
            Username : <input type='text' value={userName} onChange={(e)=> setUserName(e.target.value)} required/>
            <br/>
            <br/>
            Password : <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
            <br/>
            <br/>
            <button type='submit'>Login</button>
        </form>
        )}
    </div>
  )
}

export default Login
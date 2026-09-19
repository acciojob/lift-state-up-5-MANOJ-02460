import React from 'react'

const Login = ({isLoggedIn, onLogin}) => {

  function handleSubmit(e){
    e.preventDefault();
    onLogin()
    
    
  }
  return (
    <div>

        {isLoggedIn ? (
            <h2>You are Logged in!</h2>
        ):(
        <form onSubmit={handleSubmit}>
            Username : <input type='text'/>
            <br/>
            <br/>
            Password : <input type="password"/>
            <br/>
            <br/>
            <button type='submit'>Login</button>
        </form>
        )}
    </div>
  )
}

export default Login
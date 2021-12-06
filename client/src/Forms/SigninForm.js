import React from 'react'
import { useState } from 'react';

function SigninForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  //Submit handler for signup:
  function handleSignin(e) {
    e.preventDefault();
    
    fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else {
        console.log(response);
      }
    });
  };

  return (
    <div className="form">
      <h2>Sign-in!</h2>
      <form onSubmit={handleSignin}>
        <label htmlFor="username">Username:</label>
        <br/>
        <input 
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br/>
        <label htmlFor="password">Password:</label>
        <br/>
          <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <input type="submit" value="Sign-in!"/>
      </form>
    </div>
  )
}

export default SigninForm
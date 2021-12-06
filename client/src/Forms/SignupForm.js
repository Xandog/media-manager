import React from 'react'
import { useState } from 'react';

function SignupForm({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");


  //Submit handler for signup:
  function handleSignup(e) {
    e.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } else {
        console.log(response);
      }
    });
  };

  return (
    <div className="form">
      <h2>Sign-up!</h2>
      <form onSubmit={handleSignup}>
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
        <label htmlFor="password">Confirm Password:</label>
        <br/>
        <input 
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <br/>
        <input type="submit" value="Sign-up!"/>
      </form>
    </div>
  )
}

export default SignupForm
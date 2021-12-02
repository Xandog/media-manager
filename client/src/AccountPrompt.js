import React from 'react';
import { useState } from 'react';


import SignupForm from './SignupForm';
import SigninForm from './SigninForm';

function AccountPrompt({ setUser }) {
  const [formToggle, setFormToggle] = useState(true)

  return (
    <div>
      {formToggle? <p>Already have an account?</p> : <p>Need to create an account?</p>}
      
      <button onClick={() => setFormToggle(!formToggle)}>
        {formToggle? "Sign-in" : "Sign-up"}
      </button>

      {formToggle? (
        <SignupForm setUser={setUser}/>
      ) : (
        <SigninForm setUser={setUser}/>
      )}
    </div>
  );
}

export default AccountPrompt
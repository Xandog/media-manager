import React from "react";
import { useState } from "react";
//useEffect
//import {Route, useHistory } from "react-router-dom";

import NavBar from "./NavBar";
import AccountPrompt from "./AccountPrompt";
import ProfileView from "./ProfileView";
import MainView from "./MainView";


function App() {
  const [user, setUser] = useState(null);
  

  // //Auto-login
  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  return (
    <div className="App">
      <NavBar 
        user={user}
        setUser={setUser}
      />
      {!user ? (
        <AccountPrompt
        user={user}
        setUser={setUser}
        />
      ) : (
        <>
          <ProfileView/>
          <MainView/>
        </>
      )}
    </div>
  );
}

export default App;
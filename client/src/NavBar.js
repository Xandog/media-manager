import React from 'react'

function Navbar({ user, setUser }) {

    //Log-out function
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" })
        .then((response) => {
          if (response.ok) {
            setUser(null);
          } else {
            console.log(response);
          }
        });
    };


    return (
        <div className="NavBar">
            <h1 id="navTitle">MediaManager</h1>
            {user? (
                <>
                    <p className="userGreeting">Hello, {user.username}!</p>
                    <button className="navButton" onClick={handleLogoutClick}>Logout</button>
                </>
            ) : (
                <p className="userGreeting">Welcome!</p>
            )}
        </div>
    )
}

export default Navbar

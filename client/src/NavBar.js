import React from 'react'

function Navbar({ user, setUser }) {
    //Log-out function
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" })
        .then((response) => {
          if (response.ok) {
            setUser(null);
          }
        });
    }

    return (
        <div>
            {user? (
                <>
                    <p id="userGreeting">Hello, {user.username}!</p>
                    <button className="navBarBttn" id="logoutBttn" onClick={handleLogoutClick}>Logout</button>
                </>
            ) : (
                <p>placeholder</p>
            )}
        </div>
    )
}

export default Navbar

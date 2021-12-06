import React from 'react'
import { useState } from 'react';

function ProfileForm({ user, setUser, setFormView}) {

    const [newProfile_pic, setNewProfile_pic] = useState("");
    const [newBio, setNewBio] = useState("");


    //Submit handler for signup:
    function handleSubmit(e) {

        e.preventDefault();

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify( {bio: newBio, profile_pic: newProfile_pic} ),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            setUser(data);
            setFormView(false);
        });
    };

    return (
        <div className="form">
            <h2>Edit Profile!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="newProfile_pic">Profile Picture:</label>
                <br/>
                <input 
                    type="text"
                    id="newProfile_pic"
                    value={newProfile_pic}
                    onChange={(e) => setNewProfile_pic(e.target.value)}
                />
                <br/>
                <label htmlFor="newBio">Bio:</label>
                <br/>
                <textarea 
                    name="newBio"
                    type="text"
                    id="bio"
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)} 
                    rows={5} 
                />
                <br/>
                <input type="submit" value="Submit!"/>
            </form>
        </div>
    )
}

export default ProfileForm

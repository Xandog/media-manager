import React from 'react'

function ProfileView({ user, setFormView, setFormFilter }) {
    return (
        <div className="profileView">
            <img 
                className="profilePic" 
                src={user.profile_pic} 
                style={{width: "200px", height: "150px"}} 
                alt={user.username}
            />
            <h3 className="profileUsername">By: {user.username}</h3>
            <p className="profileBio">{user.bio}</p>
            <button 
                className="profileButton" 
                onClick={() => {
                    setFormView(true)
                    setFormFilter("PATCH_PROFILE")
                }}
            >
                Edit Profile
            </button>
        </div>
    )
}

export default ProfileView

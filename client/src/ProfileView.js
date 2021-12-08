import React from 'react'

function ProfileView({ user, setFormView, setFormFilter }) {
    return (
        <div className="ProfileView">
            <img 
                className="profilePic" 
                src={user.profile_pic} 
                alt={user.username}
            />
            <p className="profileUsername">{user.username}</p>
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

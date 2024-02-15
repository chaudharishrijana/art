import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

const Account = () => {
    
    const [profileData, setProfileData] = useState({
        name: 'Artist Name',
        email: 'artist@example.com',
        bio: 'Artist bio...',
      
    });

    
    const handleNameChange = (e) => {
        setProfileData({ ...profileData, name: e.target.value });
    };

   
    const handleEmailChange = (e) => {
        setProfileData({ ...profileData, email: e.target.value });
    };

   
    const handleBioChange = (e) => {
        setProfileData({ ...profileData, bio: e.target.value });
    };

    
    const handleChangePassword = () => {
        
    };

        const handleLogout = () => {
     
    };

    return (
        <div>
            <h2>Account Settings</h2>
            <div>
                <h3>Profile Information</h3>
                <div>
                    <label>Name:</label>
                    <input type="text" value={profileData.name} onChange={handleNameChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={profileData.email} onChange={handleEmailChange} />
                </div>
                <div>
                    <label>Bio:</label>
                    <textarea value={profileData.bio} onChange={handleBioChange} />
                </div>
                
                <Link to="/edit-profile">Edit Profile</Link>
            </div>
            <div>
                <h3>Change Password</h3>
                <button onClick={handleChangePassword}>Change Password</button>
            </div>
            <div>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Account;

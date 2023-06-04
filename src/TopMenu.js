import React, { useState } from 'react';
import './TopMenu.css';

const TopMenu = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <nav>
      <div className="menu-wrapper">
        <ul>
          <li onClick={handleProfileClick}>Profile</li>
          {/* Add other menu items */}
        </ul>
      </div>
      {profileOpen && (
        <div className="user-profile-container">
          <div className="user-profile">
            <h1>My profile</h1>
            {/* Add user information here */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopMenu;

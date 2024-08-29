import React from 'react';

const UserProfile = ({ name, profilePictureUrl }) => (
  <div>
    <img src={profilePictureUrl} alt={`${name}'s profile`} />
    <h2>{name}</h2>
  </div>
);

export default UserProfile;

import React from 'react';
import UserProfile from './UserMapProfile';

const UserGallery = () => {
  const users = [
    { id: 1, name: 'John Doe', profilePictureUrl: 'john.jpg' },
    { id: 2, name: 'Jane Smith', profilePictureUrl: 'jane.jpg' },
    { id: 3, name: 'Alice Johnson', profilePictureUrl: 'alice.jpg' },
    { id: 4, name: 'Bob Brown', profilePictureUrl: 'bob.jpg' }
  ];

  return (
    <div>
      {users.map(user => (
        <UserProfile
          key={user.id}
          name={user.name}
          profilePictureUrl={user.profilePictureUrl}
        />
      ))}
    </div>
  );
};

export default UserGallery;

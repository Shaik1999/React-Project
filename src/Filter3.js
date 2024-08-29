import React from 'react';
import UserProfile from './UserProfile';

const ActiveUserList = () => {
  const users = [
    { id: 1, name: 'John Doe', isActive: true },
    { id: 2, name: 'Jane Smith', isActive: false },
    { id: 3, name: 'Alice Johnson', isActive: true },
    { id: 4, name: 'Bob Brown', isActive: false }
  ];

  // Use filter to get only active users
  const activeUsers = users.filter(user => user.isActive);

  return (
    <div>
      <h1>Active Users</h1>
      {activeUsers.map(user => (
        <UserProfile
          key={user.id}
          name={user.name}
        />
      ))}
    </div>
  );
};

export default ActiveUserList;

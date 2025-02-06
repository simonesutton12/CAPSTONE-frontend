import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import './Users.css';
=======
 
>>>>>>> ca8999262f6db943eaff7b8c7281f7adca1c8958

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
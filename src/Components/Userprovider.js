// UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    async function fetchUserList() {
      try {
        const response = await fetch('https://panorbit.in/api/users.json');
        const data = await response.json();
        setAllUsers(data.users);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    }

    fetchUserList();
  }, []);

  return (
    <React.StrictMode>
    <UserContext.Provider value={allUsers}>
      {children}
    </UserContext.Provider>
    </React.StrictMode>
  );
}

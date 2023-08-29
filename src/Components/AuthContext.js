import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();


export  function  AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

  const signIn = (users) => {
    setCurrentUser(users);
  };

  const signOut = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signIn, signOut }}>
    {children}
  </AuthContext.Provider>
  )
}
export function useAuth() {
    return useContext(AuthContext);
  }

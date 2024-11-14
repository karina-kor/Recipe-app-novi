import React, { createContext, useState } from 'react';

const initialUserData = {
  email: '',
  id: '',
  token: '',
  displayName: 'User',
  photoURL: '',
};

export const AuthUserContext = createContext();

export const AuthUserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialUserData);

  // Function to update the context state
  const updateUserData = (newUserData) => {
    const updatedUserData = {
      ...userData,
      ...newUserData,
    };

    setUserData(updatedUserData);
  };

  const resetUserData = () => {
    setUserData(initialUserData);
  };

  return (
    <AuthUserContext.Provider
      value={{ userData, updateUserData, resetUserData }}
    >
      {children}
    </AuthUserContext.Provider>
  );
};

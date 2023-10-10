import React, { createContext, useContext, useState, useEffect } from 'react';

const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve the userData from localStorage during initialization
    const userDataFromStorage = localStorage.getItem('userData');
    if (userDataFromStorage) {
      setUserData(JSON.parse(userDataFromStorage));
    }
  }, []);

  const updateUserData = (newUserData) => {
    setUserData(newUserData);
    // Store userData in localStorage when it's updated
    localStorage.setItem('userData', JSON.stringify(newUserData));
  };

  const logout = () => {
    // Clear userData from localStorage and reset it to null
    localStorage.removeItem('userData');
    setUserData(null);
  };

  return (
    <UserDataContext.Provider value={{ userData, updateUserData, logout }}>
      {children}
    </UserDataContext.Provider>
  );
};

const useUserData = () => {
  const context = useContext(UserDataContext);
  if (!context) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};

export { UserDataProvider, useUserData };

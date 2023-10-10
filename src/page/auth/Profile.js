import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom/dist';
import { useUserData } from './Contextapi';
const Profile = () => {
  const navigate = useNavigate();
  const [userDataa, setUserDataa] = useState(null);
  const { logout,userData } = useUserData();
  useEffect(() => {
  
      if (userData) {
          // If user data exists, parse it and set it in the state
          setUserDataa(userData);
          
      } else {
          // If user data doesn't exist, navigate to the login page
          navigate('/login');
      }
  }, [navigate]);
  
  const handleLogout = () => {
    logout();
    navigate('/login')
    // You can also perform any additional logout-related actions here
  };
  return (
    <>
   
    {/* <div><p>{userData.name}</p></div> */}
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Profile
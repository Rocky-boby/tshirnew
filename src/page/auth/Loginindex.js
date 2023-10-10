
import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import Login from './Login';
import Register from './Register';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom/dist';
import { useUserData } from './Contextapi';



const Loginindex = (props) => {
    const [activeTab, setActiveTab] = useState(props.value);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const navigate = useNavigate();
    const { updateUserData,userData } = useUserData();

    useEffect(() => {
        if (userData) {
          // Navigate to the profile page with user data
          navigate('/profile', { userData });
        }
      }, [userData, navigate]);
    const handleGoogleLoginSuccess = async (response) => {
      try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${response.access_token}`,
          },
        });
  
        // Update the userData state with the Google login data
        updateUserData(res.data);
        navigate('/profile')
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
  
    // Set up the Google login
    const login = useGoogleLogin({
      onSuccess: handleGoogleLoginSuccess,
    });
    return (
        <section className="login_sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="login_btn_area">
                            <button
                                className={activeTab === 'login' ? 'login_btn active' : 'login_btn'}
                                onClick={() => handleTabClick('login')}


                            >
                                Login
                            </button>
                            <button
                                className={activeTab === 'register' ? 'login_btn active' : 'login_btn'}
                                onClick={() => handleTabClick('register')}
                            >
                                Create Account
                            </button>
                        </div>
                        <span style={{ display: "block" }}>Or</span>
                        <div className="login_btn_area">
                            <button className="login_btn " onClick={() => login()}>
                                <img
                                    width={40}
                                    height={40}
                                    src="https://img.icons8.com/color/48/google-logo.png"
                                    alt="google-logo"
                                />{" "}
                                google sign up
                            </button>
                            <button className="login_btn ">
                                <img
                                    width={40}
                                    height={40}
                                    src="https://img.icons8.com/color/48/facebook-new.png"
                                    alt="facebook-new"
                                />{" "}
                                facebook sign up
                            </button>
                        </div>






                        {activeTab === 'login' ? <Login /> : <Register />}






                    </div>
                </div>
            </div>
        </section>
    );
};

export default Loginindex;


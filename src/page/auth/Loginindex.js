
import React, { useState } from 'react';
import jwt_decode from "jwt-decode";
import Login from './Login';
import Register from './Register';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
const Loginindex = (props) => {
    const [activeTab, setActiveTab] = useState(props.value);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const login = useGoogleLogin({
        onSuccess: async (response) => {
            try {
                const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo',
                    {
                        headers: {
                            Authorization: `Bearer ${response.access_token}`
                        },
                    })
                    console.log(res.data)

            } catch (err) {
                console.log(err)
            }
        },
        
    
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


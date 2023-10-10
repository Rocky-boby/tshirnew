
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/dist'
import { getcartTotal } from '../redux/Cartslice'
import Cookies from 'js-cookie';
import { useUserData } from '../page/auth/Contextapi';

const Header = () => {
  const {cart,totalQuantity} =useSelector((state)=>state.allcart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getcartTotal())

  },[cart])
  const { logout,userData } = useUserData();
  return (
    <div>
       {/* ======== top yellow header start ======== */}
    <section className="top_yellow_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              <strong>Free Shipping on All Orders</strong> | Get Extra ₹100 OFF on
              Spent of ₹999 Use Code: <strong>BEYOUNG100</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* ======== top yellow header end ======== */}
    {/* ======== top back header start ======== */}
    <section className="top_black_sec">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="track_box">
              <a href="#">
                <span>
                  <i className="fa-solid fa-location-dot" />
                </span>
                TRACK ORDER
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="login_box" >
              
          
        {(!userData ? (<>
          <Link to="/login" className="login"> Login </Link>     
         <Link to="/register">SIGNUP</Link>
        </>
       ):(<Link to='/profile'>{userData.name}</Link>))}
         
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ======== top back header end ======== */}
    {/* ======== header start ======== */}
    <header className="header_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav
              className="navbar navbar-expand-lg navbar-light d-flex align-items-center"
              style={{ justifyContent: "space-between" }}
            >
              <Link className="navbar-brand" to="/">
                <img src="/assets/images/logo.png" className="img-fluid" />
              </Link>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Hot offers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gift boxes
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Menu item
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Help
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="search_area">
                <form action="">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn" type="submit">
                    <i className="fa-solid fa-magnifying-glass" />
                  </button>
                </form>
                <Link to="/cart" className="cart_btn">
                  <i className="fa-solid fa-cart-shopping" />
                  <span>{totalQuantity}</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    {/* ======== header end ======== */}

    </div>
  )
}

export default Header

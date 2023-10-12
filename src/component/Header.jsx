
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom/dist'
import { addtocart, getcartTotal } from '../redux/Cartslice'
import Cookies from 'js-cookie';
import { useUserData } from '../page/auth/Contextapi';

const Header = () => {
  const {cart,totalQuantity} =useSelector((state)=>state.allcart)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getcartTotal())

  },[cart])
  const navigate =useNavigate();
  const { logout,userData } = useUserData();
  const items = useSelector((state) => state.allcart.items);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();
  
    if (trimmedSearchTerm === '') {
      // If the search term is empty, show all items
     
    } else {
      // Filter items based on the search term
      const filteredResults = items.filter((item) =>
        item.title && item.title.toLowerCase().includes(trimmedSearchTerm.toLowerCase())
      );
  
      if (filteredResults.length === 0) {
        // If no results are found, set searchResults to an empty array
        setSearchResults([]);
      } else {
        // If results are found, update the searchResults state with the filtered items
        setSearchResults(filteredResults);
      }
    }
  };
  const searchRef = useRef();
  useEffect(() => {
    handleSearch();
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchTerm(''); // Clear the search term when clicking outside
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [searchTerm]);
  console.log(searchResults)
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
              <div className="search_area"  >
                  <div className='search_filed'ref={searchRef}>
                  <input
       className="form-controls"
      
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btns" onClick={handleSearch}> <i className="fa-solid fa-magnifying-glass" /></button>
         </div>
                
    
    {searchTerm && (
    <div className='product-search'>
    {searchResults.length === 0 ? (
     
      <p className='text-center p-2 p-duct'>No items found</p>

       
    ) : (
      <ul className='p-list' ref={searchRef}>
        {searchResults.map((item) => (
          <div className='p-duct'>
    <li key={item.id}>
      <div className='row'>
          <div className=' d-flex justify-content-between p-3'>
          <img className="s-p-image"src={`/assets/images/products/${item.image}` }  onClick={()=>{navigate(`/product/${item.slug}`)}}></img>
          <div className='align-middletext'>
          <p  onClick={()=>{navigate(`/product/${item.slug}`)}}>{item.title}</p>
          <span onClick={()=>{navigate(`/product/${item.slug}`)}}> ₹{item.price}</span>
          </div>
        <div className='align-middlescart'>
        <i onClick={()=>dispatch(addtocart(item))}  class="fa-solid fa-cart-shopping"></i>

          </div>
       
        </div>

      </div>
      
      
      </li>
          </div>
      
        ))}
      </ul>
    )}
  </div>
)}
  

      
    
  
    
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

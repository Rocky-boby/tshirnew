import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom/dist';
import { addtocart } from '../../redux/Cartslice';
import { getProductsBySlug } from '../../demodeta/ProductData';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Singleproduct = () => {
  const images = [
    'https://src1.ilogo.in/images/theme/A/no-minimum.webp',
    'https://src1.ilogo.in/images/theme/A/custom_tshirt_1.webp',
    'https://src1.ilogo.in/images/theme/A/polo.webp',
    'https://src1.ilogo.in/images/theme/A/no-minimum.webp',
    'https://src1.ilogo.in/images/theme/A/custom_tshirt_1.webp',
    'https://src1.ilogo.in/images/theme/A/polo.webp',
    'https://src1.ilogo.in/images/theme/A/no-minimum.webp',
    'https://src1.ilogo.in/images/theme/A/custom_tshirt_1.webp',
    'https://src1.ilogo.in/images/theme/A/polo.webp',
    'https://src1.ilogo.in/images/theme/A/no-minimum.webp',
    'https://src1.ilogo.in/images/theme/A/custom_tshirt_1.webp',
    'https://src1.ilogo.in/images/theme/A/polo.webp',
    // Add more image URLs as needed
  ];

  const topSliderRef = useRef(null);
  const bottomSliderRef = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => {
      // Synchronize both sliders when changing slides
      topSliderRef.current.slickGoTo(next);
      setActiveImageIndex(next);
    },
  };

  const bottomSliderSettings = {
    ...sliderSettings, // Copy the settings from the top slider
    slidesToShow: 5, // Show 3 images in the bottom slider
  };

  const handleImageClick = (index) => {
    // Handle image click in the bottom slider
    topSliderRef.current.slickGoTo(index);
    setActiveImageIndex(index);
  };

  // Use useEffect to set the initial position of the bottom slider based on the selected image index
  useEffect(() => {
    bottomSliderRef.current.slickGoTo(activeImageIndex);
  }, [activeImageIndex]);


    const [activeTab, setActiveTab] = useState('defaultTab'); // Set an initial active tab

    const openCity = (event, cityName) => {
      // Declare all variables
      var i, tabcontent, tablinks;
  
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
  
      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
  
      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(cityName).style.display = "block";
      event.currentTarget.className += " active";
  
      // Update the active tab in React state
      setActiveTab(cityName);
    };
  

    const { slug } = useParams();
    const data= getProductsBySlug(slug);
    const itemdata = data[0];
    const item = useSelector((state) =>
    state.allcart.items.find((item) => item.id === data[0].id)
    );
  // State variables to store selected color and size
  const [selectedColor, setSelectedColor] = useState('red');
  const [selectedSize, setSelectedSize] = useState('S');
 const [selectedQuantity, setSelectedQuantity] = useState(1);
  
    const handleQuantityChange = (e) => {
      setSelectedQuantity(Number(e.target.value));
    };
  const incrementQuantity = () => {
    if (selectedQuantity < 10) {
      setSelectedQuantity(selectedQuantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };
 
  const dispatch =useDispatch();
  const handleAddToCart = () => {
    // Dispatch the addToCart action to add the product to the cart
    dispatch(addtocart({...item,  
      color: selectedColor,
      size: selectedSize,
      quantity: selectedQuantity,
    }));
  };



  return (
    <>
      <section className="bradcamp_sec">
    <div className="container">
      <div className="row">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <span>
                  <i className="fa-solid fa-house" />
                </span>
                Home
              </Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/product">Product</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link href="" className='cnone'>{itemdata.title}</Link>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </section>
  {/* ========= bradcamp sec end ======= */}
  <section className="product_details">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="product_img_area">
          <Slider className="slider-for" {...sliderSettings} ref={topSliderRef}>
        {images.map((image, index) => (
          <div key={index} className="column1">
            <img src={image} className="magnifiedImg" alt={`Image ${index}`} style={{width:"100%"}} />
          </div>
        ))}
      </Slider>

      <Slider className="slider-nav" {...bottomSliderSettings} ref={bottomSliderRef}>
        {images.map((image, index) => (
          <div key={index} className={`column ${index === activeImageIndex ? 'slick-current' : ''}`} onClick={() => handleImageClick(index)}>
            <img
              src={image}
              className="demo cursor"
              alt={`Image ${index}`}
            />
          </div>
        ))}
      </Slider>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="product_content_main">
            <h5>{itemdata.title}</h5>
            {/* <span>Plain Shirts</span> */}
            <h5 className="price">
              ₹ {itemdata.price} <del> ₹ 1330 </del> <small>(40% off) </small>
            </h5>
            <p>
              <strong>Inclusive of All Taxes + Free Shipping</strong>
            </p>
            <ul className="reating_pd">
              <li>
                <i className="fa-solid fa-star" />
              </li>
              <li>
                <i className="fa-solid fa-star" />
              </li>
              <li>
                <i className="fa-solid fa-star" />
              </li>
              <li>
                <i className="fa-solid fa-star" />
              </li>
              <li>
                <i className="fa-solid fa-star" />
              </li>
              <li>
                <p>5.0 (13 Reviews)</p>
              </li>
            </ul>
            <div className="size_area">
      <label htmlFor="">COLOR :</label>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleColorChange}
        value={selectedColor}
      >
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
    <div className="size_area">
      <label htmlFor="">SIZE :</label>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleSizeChange}
        value={selectedSize}
      >
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
    </div>

  
    <div className="quanty_area">
      <p className="qty">
        <label htmlFor="qty">Quantity:</label>
        <button className="qtyminus" onClick={decrementQuantity} aria-hidden="true">
          −
        </button>
        <input
          type="number"
          name="qty"
          id="qty"
          min={1}
          max={10}
          step={1}
          value={selectedQuantity}
          onChange={handleQuantityChange}
        />
        <button className="qtyplus" onClick={incrementQuantity} aria-hidden="true">
          +
        </button>
      </p>
    </div>
            <div className="product_cart_area">
              <a href="#" onClick={handleAddToCart}>
                <span>
                  <i className="fa-solid fa-cart-plus" />
                </span>
                Add To cart
              </a>
              <a
                href="#"
                style={{ color: "#51cccc", backgroundColor: "transparent" }}
              >
                <span style={{ color: "#51cccc" }}>
                  <i className="fa-solid fa-arrow-right" />
                </span>
                buy now
              </a>
            </div>
            <div className="delivery_area">
              <p>DELIVERY OPTIONS</p>
              <div className="delivery_content">
                <small>
                  <p>
                    Enter your Pincode to check the delivery time and free pick
                    up options
                  </p>
                </small>
                <input
                  type="text"
                  className="pincode"
                  placeholder="Enter Pincode"
                />
                <a href="#" className="pin_ch">
                  Check
                </a>
                <ul className="shipping_list">
                  <li>
                    <span>
                      <i className="fa-solid fa-money-bill-transfer" />
                    </span>
                    Cash On Delivery
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-car-on" />
                    </span>
                    Express Shipping
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="product_description">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="description_tabs">
            <button
             
              className={`tablinks  ${activeTab === 'Description' ? 'Description active' : 'Description active'}`}
              onClick={(event) => openCity(event, 'Description')}
            >
              Description
            </button>
            <button className={`tablinks ${activeTab === 'Additional' ? 'Additional active' : ''}`}
             onClick={(event) => openCity(event, 'Additional')}>
              {" "}
              Additional information
            </button>
            <button className={`tablinks ${activeTab === 'Reviews' ? 'Reviews active' : ''}`} onClick={(event) => openCity(event, 'Reviews')}>
              Reviews (0)
            </button>
            <button className={`tablinks ${activeTab === 'Shipping' ? 'Shipping active' : ''}`} onClick={(event) => openCity(event, 'Shipping')}>
              Shipping &amp; Delivery
            </button>
          </div>
          <div id="Description" className={`tabcontent ${activeTab === 'Description ' ? 'active' : ''}`} style={{ display: "block" }}>
            <h5>Description</h5>
            <div className="des-ct">
              <p>For a quick reference here is our sizes in inches.</p>
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  XS (Extra small) – 38 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  S (Small) – 40 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  M (Medium) – 42 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  L (Large) – 44 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  XL (Extra large) – 46 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  XXL (Extra extra large) – 48 inches
                </li>
              </ul>
            </div>
            <div className="des-ct">
              <p>For a quick reference here is our sizes in inches.</p>
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  XS (Extra small) – 38 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  S (Small) – 40 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  M (Medium) – 42 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  L (Large) – 44 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  XL (Extra large) – 46 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  XXL (Extra extra large) – 48 inches
                </li>
              </ul>
            </div>
            <div className="des-ct">
              <p>For a quick reference here is our sizes in inches.</p>
              <ul>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  XS (Extra small) – 38 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  S (Small) – 40 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  M (Medium) – 42 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  L (Large) – 44 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  XL (Extra large) – 46 inches
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-angle-right" />
                  </span>
                  XXL (Extra extra large) – 48 inches
                </li>
              </ul>
            </div>
          </div>
          <div id="Additional" className={`tabcontent ${activeTab === 'Additional' ? 'active' : ''}`}>
            <h5>Additional information</h5>
            <table id="myTable">
              <tbody>
                <tr>
                  <td>Weight</td>
                  <td>0.3 kg</td>
                </tr>
                <tr>
                  <td>Dimensions</td>
                  <td>28 × 27 × 2 cm</td>
                </tr>
                <tr>
                  <td>Colour</td>
                  <td>Royal Blue</td>
                </tr>
                <tr>
                  <td>Size</td>
                  <td>XS-38, S-40, M-42, L-44, XL-46, XXL-48</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="Reviews" className={`tabcontent ${activeTab === 'Reviews' ? 'active' : ''}`}>
            <div className="row">
              <div className="col-lg-6">
                <div id="Home" className="descontent">
                  <form action="">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlSelect1">
                        Select Rating
                      </label>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="far fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-star" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="far fa-star" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Reviews</label>
                      <textarea
                        name=""
                        className="form-control"
                        cols={30}
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                    <div className="main_button">
                      <a href="#">Login and Submit Reviews</a>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="main_reviews">
                  <div className="review_img">
                    <img
                      src="http://chromefolio.com/design2/galaxy-coins/images/comment-user.jpg"
                      alt=""
                    />
                  </div>
                  <div className="review_content">
                    <h6>
                      <strong>lorem Ipsum</strong>
                    </h6>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                    </ul>
                    <p>
                      Consectetur adipiscing elit integer sit amet augue laoreet
                      maximus nuncac.
                    </p>
                  </div>
                </div>
                <div className="main_reviews">
                  <div className="review_img">
                    <img
                      src="http://chromefolio.com/design2/galaxy-coins/images/comment-user.jpg"
                      alt=""
                    />
                  </div>
                  <div className="review_content">
                    <h6>
                      <strong>lorem Ipsum</strong>
                    </h6>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                    </ul>
                    <p>
                      Consectetur adipiscing elit integer sit amet augue laoreet
                      maximus nuncac.
                    </p>
                  </div>
                </div>
                <div className="main_reviews">
                  <div className="review_img">
                    <img
                      src="http://chromefolio.com/design2/galaxy-coins/images/comment-user.jpg"
                      alt=""
                    />
                  </div>
                  <div className="review_content">
                    <h6>
                      <strong>lorem Ipsum</strong>
                    </h6>
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fas fa-star" />
                        </a>
                      </li>
                    </ul>
                    <p>
                      Consectetur adipiscing elit integer sit amet augue laoreet
                      maximus nuncac.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="Shipping" className={`tabcontent ${activeTab === 'Shipping' ? 'active' : ''}`}>
            <h5>Shipping &amp; Delivery</h5>
            <div className="des-ct">
              <p>For a quick reference here is our sizes in inches.</p>
              <p className="shipping_p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="des-ct">
              <p>For a quick reference here is our sizes in inches.</p>
              <p className="shipping_p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="des-ct">
              <p>For a quick reference here is our sizes in inches.</p>
              <p className="shipping_p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Singleproduct
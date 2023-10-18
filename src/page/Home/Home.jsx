
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import { Link } from 'react-router-dom/dist';
import { useDispatch, useSelector } from 'react-redux'
import { addtocart } from '../../redux/Cartslice';
import Sliderst from '../../component/Slider';
export default function Home() {
  const [activeImage, setActiveImage] = useState(0); // Initialize with the second image as active
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: -1,
    autoplay: true,
  
    beforeChange: (current, next) => {
      // Update the activeImage state before the slide changes
      setActiveImage(next);
    },
  };
  const images = ['1.png', '7.png', '6.png', '1.png',/* Add more image URLs as needed */];
  const items = useSelector((state) => state.allcart.items);
  const dispatch =useDispatch();


  const mobilebanner = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const BIGSAVINGZONE = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint value as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };
  const categoryslider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the breakpoint value as needed
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };


  return (
    <>
    {/* ======= banner start ======== */}
    <section className="banner_sec">
      <div className="banner_area">
        <img src="/assets/images/banner2.jpg" alt="banner-img" className="img-fluid" />
        <div className="banner_overlay">
          <div className="container">
            <p>Latest trending</p>
            <h1>Electronic items</h1>
            <a href="#" className="banner_btn">
              All Cetagory
            </a>
          </div>
        </div>
        <div className="product_overlay">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                
                <div className="">
                <Slider {...settings}>
        {images.map((image, index) => (
          <div className="slide_item item"  key={index}>
          <div className="product_item">
            <div className="product_img">
             
                <img src={`/assets/images/products/${image}`} alt={`Image ${index + 1}`} 
               
                className="img-fluid"
              />
            </div>
            <div className="product_content">
              <div>
                <h5>
                  $44 <del>$100</del>
                </h5>
                <ul className="reating_list">
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-regular fa-star" />
                    </a>
                  </li>
                </ul>
                <p>GoPro HERO6 4K Action 5 Camera - Black</p>
              </div>
              <div>
                <a href="#" className="wishlist">
                  <i className="fa-solid fa-cart-shopping" />
                </a>
              </div>
            </div>
          </div>
        </div>
          
        ))}
      </Slider>
               
                </div>
              </div>
              <div className="col-lg-5">
                <div className="featured_img">
                <img src={`/assets/images/products/${images[activeImage]}`} alt={`Active Image`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobilebanner_area">


      </div>
      
    </section>


    <section className='mobile-bnner'>
    <Slider {...mobilebanner}>
  <div>
  <img style={{width:'100%'}}src='https://www.beyoung.in/api/catalog/home-19-8-23/new/Cricket-World-Cup-home-page-banner-mobile-view.jpg'/>

  </div>
  <div>
  <img  style={{width:'100%'}}src='https://www.beyoung.in/api/catalog/home-19-8-23/new/combo-banner-mobile-view1.jpg'/>

  </div>
  </Slider> 
    </section>

    <section className='ceta-banner'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
        <Slider {...categoryslider}>
        <div className='ceta-item-slide'><img src="https://www.beyoung.in/api/catalog/home-19-8-23/tshirt.png" alt="" className="img-fluid" /><span class="circule-name">Shirts</span></div>
        <div className='ceta-item-slide'><img src="https://www.beyoung.in/api/catalog/home-19-8-23/joggers.png" alt="" className="img-fluid"/><span class="circule-name">Shirts</span></div>
        <div className='ceta-item-slide'><img src="https://www.beyoung.in/api/catalog/home-19-8-23/category-icon1.png" alt="" className="img-fluid"/><span class="circule-name">Shirts</span></div>
        <div className='ceta-item-slide'><img src="https://www.beyoung.in/api/catalog/home-19-8-23/boxer.png" alt="" className="img-fluid"/><span class="circule-name">Shirts</span></div>
        <div className='ceta-item-slide'><img src="https://www.beyoung.in/api/catalog/home-19-8-23/joggers.png" alt="" className="img-fluid"/><span class="circule-name">Shirts</span></div>
      </Slider>
        </div>
      </div>
    </div>
      </section>

    <section className='zone-banner'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <Slider {...BIGSAVINGZONE}>
  <div>
  <img style={{width:'100%'}}src='https://www.beyoung.in/api/catalog/home-19-7-23/Pyjama-Pants-home-page-banner-big-saving-mode126.jpg'/>

  </div>
  <div>
  <img  style={{width:'100%'}}src='https://www.beyoung.in/api/catalog/homepage-05-06-23/Oversized-tshirt-banner-big-SAVING-ZONE0908.jpg'/>

  </div>
  <div>
  <img  style={{width:'100%'}}src='https://www.beyoung.in/api/catalog/home-19-7-23/Travel_collection_big_saving_zone_home_page_banner.jpg'/>

  </div>
  <div>
  <img  style={{width:'100%'}}src='https://www.beyoung.in/api/catalog/home-19-8-23/combo-section0209.jpg'/>

  </div>
  </Slider>
          </div>
        </div> 
      </div>
    </section>

    <section className='saving-banner'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <p class="heading-mobile">big saving zone</p>
      <Slider {...BIGSAVINGZONE}>
  <div>
  <img style={{width:'100%'}}src='https://www.beyoung.in/api/catalog/home-19-7-23/Pyjama-Pants-home-page-banner-big-saving-mode126.jpg'/>

  </div>
  <div>
  <img  style={{width:'100%'}}src='https://www.beyoung.in/api/catalog/homepage-05-06-23/Oversized-tshirt-banner-big-SAVING-ZONE0908.jpg'/>

  </div>
  <div>
  <img  style={{width:'100%'}}src='https://www.beyoung.in/api/catalog/home-19-7-23/Travel_collection_big_saving_zone_home_page_banner.jpg'/>

  </div>
  <div>
  <img  style={{width:'100%'}}src='https://www.beyoung.in/api/catalog/home-19-8-23/combo-section0209.jpg'/>

  </div>
  </Slider> 
          </div>
        </div>
      </div>
    </section>
    {/* ======= banner end ======== */}
    {/* ====== contact banner start ====== */}
    <section className="contact_banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact_img_area">
              <img src="/assets/images/snd-overley.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact_content">
              <h1>IT S  NEVER TOO LATE</h1>
              <p>
                Lorem ipsum dolor sit amet, <br /> adipisicing elit.
              </p>
              <a href="#" className="banner_btn">
                PLAY VIDEO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ====== contact banner end ====== */}
    {/* ====== trending sec start ===== */}
    <section className="trending_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading_area text-center">
              <p>Latest trending</p>
              <h1>Electronic items</h1>
            </div>
          </div>
          {items.slice(0, 6).map((item)=>(
        <div className="col-6 col-lg-4" key={item.id}>
        <div className="product_main">
          <div className="productlist_img">
            <span className="sale_tag">SALE</span>
            <Link to={`/product/${item.slug}`}><img src={`/assets/images/products/${item.image}`} alt="" className="img-fluid" />
            </Link> </div>
          <div className="productlist_content">
            <h4>{item.title}</h4>
            <div className="product_details_content">
              <div>
                <h5>
                ₹{item.price} <del>₹1000</del>
                </h5>
                <ul className="reating_list">
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-solid fa-star" />
                    </a>
                  </li>
                  <li>
                    <a href="">5.9</a>
                  </li>
                </ul>
              </div>
              <div>
                <a onClick={()=>dispatch(addtocart(item))} href="#" className="wishlist">
                  <i className="fa-solid fa-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
          <div className="col-lg-12 text-center">
            <Link to="/product" className="apply_now">
              See All
            </Link>
          </div>
        </div>
      </div>
    </section>
    {/* ====== trending sec end ===== */}
    {/* ======= about sec start ===== */}
    <section className="about_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="about_img">
              <img src="/assets/images/about-bg.jpg" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about_content">
              <h1> consectetur adipisicing elit</h1>
              <p>
                {" "}
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ======= about sec end ===== */}
    {/* ====== product list start ====== */}
    <section className="product_list_sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="trd-banner">
              <img src="/assets/images/fashion-bn.jpg" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="view_area">
              <img src="/assets/images/f1.jpg" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="view_area">
              <img src="/assets/images/f2.jpg" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="trd-banner">
              <img src="/assets/images/trd-bn.png" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ====== product list end ======= */}

   
  </>
  

  )
}

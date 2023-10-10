import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Sliderst = () => {
  const [activeImage, setActiveImage] = useState(0); // Initialize with the second image as active

  const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Adjust the speed of the transition
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 4000, // Adjust the autoplay speed in milliseconds
    centerMode: false,
    focusOnSelect: true,
    centerPadding: '0',
    beforeChange: (current, next) => {
      // Update the activeImage state before the slide changes
      setActiveImage(next);
    },
  };
  
  const images = ['1.png', '7.png', '6.png', '1.png']; // Add more image URLs as needed

  return (
    <div className="text-center">
    <Slider {...settings}>
      {images.map((image, index) => (
        <div className={`slide_item ${activeImage === index ? 'active' : ''}`} key={index}>
          <div className={`product_items ${activeImage === index ? 'psitem' : ''}`}>
            <div className={`product_imgs ${activeImage === index ? 'psitemimg' : ''}`}>
              <img
                src={`/assets/images/products/${image}`}
                alt={`Image ${index + 1}`}
                className={`img-fluid ${activeImage === index ? 'activeImage' : ''}`}
              />
            </div>
            <div className="product_content">
              {/* ... (rest of your content) ... */}
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Sliderst;

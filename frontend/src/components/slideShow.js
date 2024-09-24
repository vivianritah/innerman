import React from 'react';
import Slider from 'react-slick';
import background1 from '../images/background1.jpg';
import background2 from '../images/background2.jpg';
import background3 from '../images/background3.jpg';
import background4 from '../images/background4.jpg';
import background5 from '../images/background5.jpg';
import './slideShow.css';

const HeaderSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [background1, background2, background3, background4, background5]; // Added background5 here

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} className="slide-image" />
            <div className="slide-text">
              <h2>Grow in Stature, Wisdom and Spirit</h2>
              <p>To raise a God-fearing generation through a holistic quality education.</p>
              <a href="/createAccount" class="apply-button">Apply Now</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeaderSlideshow;

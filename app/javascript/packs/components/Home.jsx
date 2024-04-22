import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

export const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="video-container">
          <video className="img-fluid" autoPlay loop muted>
            <source src="https://cdn.pixabay.com/video/2023/10/15/185096-874643413_large.mp4" type="video/mp4" />
          </video>
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="video-container">
          <video className="img-fluid" autoPlay loop muted>
            <source src="https://cdn.pixabay.com/video/2020/09/08/49375-459436752_tiny.mp4" type="video/mp4" />
          </video>
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="video-container">
          <video className="img-fluid" autoPlay loop muted>
            <source src="https://cdn.pixabay.com/video/2022/02/08/107178-675298882_tiny.mp4" type="video/mp4" />
          </video>
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
      </Slider>
      <div className='header'>
        <h2>AS FEATURED ON</h2>
        <div className="images">
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo3.svg"/>
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo4.svg"/>
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo5.svg"/>
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo1.svg"/>
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo2.svg"/>
          </div>
        </div>
      </div>
      <div className="title">
        <h1 >A Word From The Author</h1>
      </div>
      <div className=" img">
        <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/about-image.png"/>
      </div>
    </div>
  );
};
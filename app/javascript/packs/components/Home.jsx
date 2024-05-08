import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

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
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo3.svg" alt="Featured Logo 3" />
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo4.svg" alt="Featured Logo 4" />
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo5.svg" alt="Featured Logo 5" />
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo1.svg" alt="Featured Logo 1" />
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo2.svg" alt="Featured Logo 2" />
          </div>
        </div>
      </div>
      <div className='Personal'>
        <div className='bio-image2'>
          <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/about-image.png" alt='Profile' />
        </div>
      </div>
      <div className='text-bio-2'>
        <h1>A Word From The Author</h1>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <button className="btn">READ MORE</button>
      </div>
      {/* <div>
        <div className='box'>
          <h2>Mystery Boxes by Kitabay</h2>
        </div>
        <div class="rectangle-box">
        <div className='box-image'>
            <img src='/image/book1.jpeg' alt='Box' />
          </div>

          <ul>
            <li><a href="#">Available in 3 Sizes</a></li>
            <li><a href="#">Over 8 Different Genres</a></li>
            <li><a href="#">Up to 80% discount</a></li>
          </ul>
          <ul>
            <li><a href="#">100% Original Books</a></li>
            <li><a href="#">Includes Free Bookmarks</a></li>
            <li><a href="#">Free Doorstep Delivery</a></li>
          </ul>
          <div className='box-line'>
            <h3>Starting at ₹1199 for 10 Books</h3>
          </div>
          <div>
            <button className='btn23'>shop now</button>
          </div>
        </div>
      </div> */}
      <div>
        <div className='story-container'>
          <div className='text-container'>
            <h1 className='xyz'> Smoke And The Heart</h1>
            <p className='xyz'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit autfugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            <button className="btn123">BUY COMPLETE SERIES</button>
          </div>
          <div className='image-container abcd'>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/book-cover1.png" alt='Book Cover 1' />
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/book-cover2.png" alt='Book Cover 2' />
          </div>
          <div className='image-container xbcd'>
            <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/book-cover3.png' alt='Book Cover 3' />
            <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/book-cover4.png' alt='Book Cover 4' />
          </div>
        </div>
      </div>
      <div className='email'>
        <div className="left-side">
          <h2>Subscribe Now to Get Regular Updates</h2>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className='right-side'>
          <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='Subscription Image' />
        </div>
      </div>
    </div>
  );
};

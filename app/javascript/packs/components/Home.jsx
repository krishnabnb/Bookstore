import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';
import { FaBook } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { ImCart } from "react-icons/im";
import { GiTrophyCup } from "react-icons/gi";

export const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const [counters, setCounters] = useState([
    { id: 1, target: 50, current: 0, step: 1 },
    { id: 2, target: 2000, current: 0, step: 20 },
    { id: 3, target: 600, current: 0, step: 6 },
    { id: 4, target: 125, current: 0, step: 1 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prevCounters => {
        return prevCounters.map(counter => {
          const nextCounter = counter.current + counter.step;
          return {
            ...counter,
            current: nextCounter >= counter.target ? counter.target : nextCounter,
          };
        });
      });
    }, 100); // Change the interval time as per your requirement
    return () => clearInterval(interval);
  }, []);

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
      <div className='Persol'>
        <div className='bio-image2'>
          <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/about-image.png" alt='Profile' />
        </div>
      </div>
      <div className='text-bio-2'>
        <h1>A Word From The Author</h1>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <button className="btn">READ MORE</button>
      </div>
      <div>
        <div className='storyqaq-container'>
          <div className='texvert-container'>
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
      <div>
        <div className='newbook'>
          <h1>New Books And CD</h1>
        </div>
        <div style={{ display: 'flex', marginLeft: '300px' }}>
          <div style={{ marginRight: '30px' }}>
            <img src='https://www.collinsdictionary.com/images/full/storybook_222287314.jpg' className='bookimage'></img>
            <h4 className='booktext'>Give Me Also</h4>
            <h3 className='booktext'>$30.00</h3>
            <div className='bookstar'>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
            </div>
          </div>
          <div style={{ marginRight: '30px' }}>
            <img src='https://images.pexels.com/photos/4996868/pexels-photo-4996868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Book Image' className='bookimage' />
            <h4 className='booktext'>Love is Love</h4>
            <h3 className='booktext'>$22.00</h3>
            <div className='bookstar'>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
            </div>
          </div>
          <div style={{ marginRight: '30px' }}>
            <img src='https://images.pexels.com/photos/17654218/pexels-photo-17654218.jpeg?cs=srgb&dl=pexels-nunzdy-17654218.jpg&fm=jpg' className='bookimage'></img>
            <h4 className='booktext'>Molleon’s Life</h4>
            <h3 className='booktext'>$25.00</h3>
            <div className='bookstar'>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
            </div>
          </div>
          <div >
            <img src='https://img.freepik.com/free-photo/high-angle-tasty-coffee-cup-books_23-2148882800.jpg?w=740&t=st=1716540168~exp=1716540768~hmac=e9470e7b7075e206e1aedad761866f69bcbaf254404a091a70a2f065da72a571' alt='Book Image' className='bookimage' />
            <h4 className='booktext'>Olivani</h4>
            <h3 className='booktext'>$15.00</h3>
            <div className='bookstar'>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
              <div className="star-container"><span className="star">☆</span></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="horizontal-counters green-container">
          {counters.map(counter => (
            <div key={counter.id}>
              <h1 >{counter.current}</h1>
              {counter.id === 1 && (
                <div >
                  <h2><FaBook/>     BOOKS</h2>
                </div>
              )}
               {counter.id === 2 && (
                <div >
                  <h2><ImCart/>     SALES</h2>
                </div>
              )}
               {counter.id === 3 && (
                <div >
                  <h2><FiBookOpen/>     PAGES</h2>
                </div>
              )}
               {counter.id === 4 && (
                <div >
                  <h2><GiTrophyCup/>     AWARDS</h2>
                </div>
              )}
            </div>
          ))}
        </div>
        <Slider>
        </Slider>
      </div>
      {/* <div>
        {counters.map(counter => (
          <div key={counter.id}>
            <div className="horizontal-counters green-container">
              <div>
                <h1>{counter.current}</h1>
              </div>
            </div>
            {counter.id === 1 && (
              <div className="content-below-counter">
                <h2>Book Title 1</h2>
                <p>Description or additional information goes here...</p>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
            )}
            {counter.id === 2 && (
              <div className="content-below-counter">
                <h2>Page Details</h2>
                <p>Description or additional information goes here...</p>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
            )}
            {counter.id === 3 && (
              <div className="content-below-counter">
                <h2>Payment Information</h2>
                <p>Description or additional information goes here...</p>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
              </div>
            )}
          </div>
        ))}
        <Slider>
        </Slider>
      </div> */}

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



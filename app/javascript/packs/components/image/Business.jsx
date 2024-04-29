import React from 'react';
import "../ProductModule/product.css"
import "./image.css"
import { Link } from 'react-router-dom';

const Business = () => {
  return (
    <div>
      <div>
        <div className='bio-container'>
          <div className='title-2'>
            <h1>Business knowledge</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
          </div>
        </div>
      </div>
      <div className='product-container'>
        <div className="product-text">
          <img src='/image/P21.jpg' alt='Product 1' className='product' />
          <h4>Become A Master of Closing Sales</h4>
          <Link to="/cart"><button className="subscribe-btn">₹639.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/p22.jpg' alt='Product 2' className='product productSecond image123' />
          <h4>Safal Businessman Kaise Banen?</h4>
          <Link to="/cart"><button className="subscribe-btn">₹163.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/p24.jpg' alt='Product 3' className='product productSecond' />
          <h4>Business Kohinoor : Ratan Tata </h4>
          <Link to="/cart"><button className="subscribe-btn">₹277.00 - Purchase</button></Link>
        </div>
      </div>
      <div className='product-container'>
        <div className="product-text">
          <img src='/image/p23.jpg' alt='Product 1' className='product' />
          <h4>ZERO 2 HERO</h4>
          <Link to="/cart"><button className="subscribe-btn">₹250.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/p25.jpg' alt='Product 2' className='product productSecond image123' />
          <h4>The Psychology of Money</h4>
          <Link to="/cart"><button className="subscribe-btn">₹409.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/p26.jpg' alt='Product 3' className='product productSecond' />
          <h4>Financial Modeling</h4>
          <Link to="/cart"><button className="subscribe-btn">₹1490.00 - Purchase</button></Link>
        </div>
      </div>

      <div className='email'>
        <div className="left-side">
          <h2>Subscribe Now to Get Regular Updates</h2>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className='right-side'>
          <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='Subscription Image'/>
        </div>
      </div>
    </div>
  )
}

export default Business;
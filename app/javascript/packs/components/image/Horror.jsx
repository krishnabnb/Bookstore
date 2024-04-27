import React from 'react';
import "../ProductModule/product.css"
import "./image.css"
import { Link } from 'react-router-dom';

const Horror = () => {
  return (
    <div>
      <div>
        <div className='bio-container'>
          <div className='title-2'>
            <h1>Horror stories</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
          </div>
        </div>
      </div>
      <div className='product-container'>
        <div className="product-text">
          <img src='/image/b1.jpg' alt='Product 1' className='product' />
          <h4>The Canterville Ghost</h4>
          <Link to="/cart"><button className="subscribe-btn">₹119.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/b4.jpg' alt='Product 2' className='product productSecond image123' />
          <h4>Myths of Old</h4>
          <Link to="/cart"><button className="subscribe-btn">₹229.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/bb1.jpg' alt='Product 3' className='product productSecond' />
          <h4>Tales of Horror by Nikesh Murali</h4>
          <Link to="/cart"><button className="subscribe-btn">₹219.00 - Purchase</button></Link>
        </div>
      </div>
      <div className='product-container'>
        <div className="product-text">
          <img src='/image/b2_.jpg' alt='Product 1' className='product' />
          <h4>The Exorcist</h4>
          <Link to="/cart"><button className="subscribe-btn">₹381.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/b3.jpg' alt='Product 2' className='product productSecond image123' />
          <h4>Yesternight</h4>
          <Link to="/cart"><button className="subscribe-btn">₹971.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/b5.jpg' alt='Product 3' className='product productSecond' />
          <h4>Playthings</h4>
          <Link to="/cart"><button className="subscribe-btn">₹235.00 - Purchase</button></Link>
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

export default Horror;
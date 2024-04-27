import React from 'react';
import './product.css';

export const Product = () => {
  return (
    <div>
      <div>
        <div className='bio-container'>
          <div className='title-2'>
            <h1>Payments</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
          </div>
        </div>
      </div>
      <div className='product-container'>
        <div className="product-text textinproduct">Product 1</div>
        <img src='/image/p1.jpg' alt='Product 1' className='product' />
        <div className="product-text">Product 2</div>
        <img src='/image/p2.jpg' alt='Product 2' className='product productSecond' />
        <div className="product-text">Product 2</div>
        <img src='/image/p3.jpg' alt='Product 3' className='product productSecond' />
        <div className="product-text">Product 2</div>
        <img src='/image/p6.jpg' alt='Product 4' className='product productSecond' />
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
  );
};

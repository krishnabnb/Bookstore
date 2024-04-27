import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './product.css';

export const Product = () => {
  return (
    <div>
      <div>
        <div className='bio-container'>
          <div className='title-2'>
            <h1>Products</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
          </div>
        </div>
      </div>
      <div className='product-container'>
        <div className="product-text">
          <Link to="/adventure"><img src='/image/p1.jpg' alt='Product 1' className='product' /></Link>
          <h4>Adventure stories</h4>
        </div>
        <div className="product-text">
          <Link to="/classics"><img src='/image/p2.jpg' alt='Product 2' className='product productSecond' /></Link>
          <h4>Classics</h4>
        </div>
        <div className="product-text">
          <Link to="/crime"><img src='/image/p3.jpg' alt='Product 3' className='product productSecond' /></Link>
          <h4>Crime</h4>
        </div>
        <div className="product-text">
          <Link to="/fairy-tales"><img src='/image/p7.jpg' alt='Product 4' className='product productSecond' /></Link>
          <h4>Fairy tales, fables, and folk tales</h4>
        </div>
      </div>
      <div className='product-container'>
        <div className="product-text">
          <Link to="/fantasy"><img src='/image/p13.jpg' alt='Product 1' className='product' /></Link>
          <h4>Fantasy</h4>
        </div>
        <div className="product-text">
          <Link to="/historical"><img src='/image/p9.jpg' alt='Product 2' className='product productSecond' /></Link>
          <h4>Historical fiction</h4>
        </div>
        <div className="product-text">
          <Link to="/horror"><img src='/image/p10.jpg' alt='Product 3' className='product productSecond' /></Link>
          <h4>Horror</h4>
        </div>
        <div className="product-text">
          <Link to="/novel"><img src='/image/p11.jpg' alt='Product 4' className='product productSecond' /></Link>
          <h4>Novel</h4>
        </div>
      </div>
      <div className='product-container'>
        <div className="product-text">
          <Link to="/romance"><img src='/image/p12.jpg' alt='Product 1' className='product' /></Link>
          <h4>Romance</h4>
        </div>
        <div className="product-text">
          <Link to="/science"><img src='/image/p8.jpg' alt='Product 2' className='product productSecond' /></Link>
          <h4>Science fiction</h4>
        </div>
        <div className="product-text">
          <Link to="/thrillers"><img src='/image/p14.jpg' alt='Product 3' className='product productSecond' /></Link>
          <h4>Thrillers</h4>
        </div>
        <div className="product-text">
          <Link to="/business"><img src='/image/p15.jpg' alt='Product 4' className='product productSecond' /></Link>
          <h4>Business</h4>
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
  );
};
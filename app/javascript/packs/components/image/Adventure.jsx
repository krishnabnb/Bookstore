import React from 'react';
import "../ProductModule/product.css"
import "./image.css"
import { Link } from 'react-router-dom';

const Adventure = () => {
  return(
    <div>
      <div>
        <div className='bio-container'>
          <div className='title-2'>
            <h1>Adventure stories</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
          </div>
        </div>
      </div>
      <div className='product-container'>
        <div className="product-text">
          <img src='/image/p16.jpg' alt='Product 1' className='product' />
          <h4>Panchatantra</h4>
          <Link to={{ pathname: "/cart", state: { book_id: "p16", title: "Panchatantra" } }}><button className="subscribe-btn">₹179.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/p19.jpg' alt='Product 2' className='product productSecond image123' />
          <h4>Aesop's Fables</h4>
          <Link to={{ pathname: "/cart", state: { book_id: "p19", title: "Aesop's Fables" } }}><button className="subscribe-btn">₹179.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/p17.jpg' alt='Product 3' className='product productSecond' />
          <h4>Greatest Short Stories</h4>
          <Link to={{ pathname: "/cart", state: { book_id: "p17", title: "Greatest Short Stories" } }}><button className="subscribe-btn">₹179.00 - Purchase</button></Link>
        </div>
      </div>
      <div className='product-container'>
        <div className="product-text">
          <img src='/image/p18.jpg' alt='Product 1' className='product' />
          <h4>Tom Sawyer</h4>
          <Link to={{ pathname: "/cart", state: { book_id: "p18", title: "Tom Sawyer" } }}><button className="subscribe-btn">₹247.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/p20.jpg' alt='Product 2' className='product productSecond image123' />
          <h4>Aesop's Fables</h4>
          <Link to={{ pathname: "/cart", state: { book_id: "p20", title: "Aesop's Fables" } }}><button className="subscribe-btn">₹122.00 - Purchase</button></Link>
        </div>
        <div className="product-text">
          <img src='/image/21.jpg' alt='Product 3' className='product productSecond' />
          <h4>Akbar Birbal</h4>
          <Link to={{ pathname: "/cart", state: { book_id: "p21", title: "Akbar Birbal" } }}><button className="subscribe-btn">₹140.00 - Purchase</button></Link>
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
};

export default Adventure;

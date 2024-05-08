import React from 'react';
import './Forgotepass.css'; // Import CSS file for styles

const Forgotepass = () => {
  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscribed!');
  };

  return (
    <div className="forgot-password-container">
      <div className="background-section">
        <img
          src="https://img.freepik.com/free-vector/gold-luxury-background-concept_23-2148609117.jpg?w=1380&t=st=1715172956~exp=1715173556~hmac=9300f1a938adcdb2619ed6b6d970b9d41c6750957b4bb4d3daf2cdf8d4c34656"
          alt="Background"
          className="background-image"
        />
        <div className="content-section">
          {/* Content goes here */}
        </div>
      </div>
      <div className="subscription-section">
        <div className="left-side">
          <h2>Subscribe Now to Get Regular Updates</h2>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn" onClick={handleSubscribe}>Subscribe</button>
        </div>
        <div className="right-side">
          <img
            src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png"
            alt="Subscription Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Forgotepass;

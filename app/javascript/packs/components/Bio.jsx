import React from 'react';
import './bio.css';
import {  FaInstagram } from 'react-icons/fa';


const Bio = () => {
  return (
    <div>
      <div className='bio-container'>
        <div className='title-2'>
          <h1>About Kathryn</h1>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
        </div>
      </div>
      <div className='story'>
        <div className='bio-image'>
          <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/about-image-02.png" alt='Profile' />
        </div>
      </div>
      <div className='text-bio'>
        <h1> My Story</h1>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
      <div className='Personal'>
        <div className='bio-image2'>
          <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/about-image.png" alt='Profile' />
        </div>
      </div>
      <div className='text-bio-2'>
        <h1>Personal Life</h1>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      </div>

      <div className='award'>
       <h1>AWARDS</h1>
      </div>
      <div className='award-section'>
        <div className='award-image1'>
          <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/award01.png" alt='Award' />
          <h4>  Best Author Award 2016</h4>
          <p>Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit</p>
        </div>
        <div className='award-image2'>
          <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/award02.png" alt='Award' />
          <h4>  Best Author Award 2016</h4>
          <p>Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit</p>
        </div>
        <div className='award-image3'>
          <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/award03.png" alt='Award' />
          <h4>  Best Author Award 2016</h4>
          <p>Nemo enim ipsam voluptatem quia voluptas aspernatur aut odit aut fugit</p>

        </div>
      </div>
      <div className='bio-container-last'>
        <div className='title-2'>
          <h1>"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatemt."</h1>
          <p>Kathryn Moris</p>
        </div>
      </div>

        <div className="logo"><FaInstagram /></div>
        <div className='instagram'>
          <h1>Follow @kathryn</h1>
          <p>Leo nulla cras augue eros, diam vivamus et lectus volutpat at facilisi tortor porta.</p>
          <button className="visit-instagram-btn">Visit Instagram</button>
      </div>

      <div className="full-image">
       <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/insta-feed-2.jpg" alt='Award' />
      </div>

      <div className='container-fluid'>
        <div className='bio-image2'>
          <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/about-image-03.png' alt='img'/>
        </div>
        <div className='text-bio-3'>
          <h1>Need a Speaker for Your Upcoming Event?</h1>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
      </div>
      <div className='email'>
        <div className="left-side">
          <h2>Subscribe Now to Get Regular Updates</h2>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className='right-side'>
          <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='img'/>
        </div>
      </div>

    </div>
  );
};

export default Bio;
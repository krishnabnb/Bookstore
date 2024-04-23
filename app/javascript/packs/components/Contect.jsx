import React from 'react'
import './contect.css';


export const Contect = () => {
  return (
    <div>
      <div className='bio-container'>
        <div className='title-2'>
          <h1>Contact</h1>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
        </div>
      </div>
      <div className="main">
        <div className='container'>
          <h1 className='heding'>Get In Touch</h1>
        </div>
        <div className='line-1'>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
        </div>
        <div className='mail'>
          <p>mail@example.com</p>
        </div>
        <div style={styles.line_to}></div>

        <div>
          <p className='msg'>Send Me a Message</p>
        </div>
        <div >
          <input type="email" placeholder="your name" className="input" />
        </div>
        <div>
          <input type="email" placeholder="Email" className="input" />
        </div>
        <div>
          <input type="email" placeholder="Subject" className="input" />
        </div>
        <div>
          <input type="email" placeholder="Massage" className="text" />
        </div>
        <div>
        <button className="Button">Send Message</button>
        </div>
        <div className='follow'>
          <p>Follow Me</p>
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
  )
}


const styles = {
  line_to: {
    position: 'absolute',
    top: '-28%',
    right: '5%',
<<<<<<< HEAD
    marginTop: '85px',
=======
    marginTop: '850px',
>>>>>>> 193af8b81ff5a22b8db4fbdfba0f2de1a6558d0d
    transform: 'translate(-50%, -50%)',
    width: '590px',
    height: '0.5px',
    backgroundColor: ' #946659',
    marginLeft: '340px',

  },
}
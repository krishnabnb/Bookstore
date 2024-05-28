import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';
import { FaBook } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { ImCart } from "react-icons/im";
import { GiTrophyCup } from "react-icons/gi";
import { FaDownload, FaRegStar } from "react-icons/fa";

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
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const redirectToBookApp = () => {
    window.location.href = "https://hopeforhealingfoundation.org/free-resources/?gad_source=1&gclid=EAIaIQobChMIq53CteithgMVMKpmAh0-JgOGEAAYAyAAEgJ9BfD_BwE"; // Yahan par app ka URL daalain
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
      <div>
        <h1 className='newbook'>Our Books</h1>
      </div>
      <div className='pp'>
        <p >adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
        <p className='pr'>veniam, quis nostrud exercitation ullamco laboris</p>
      </div>
      <div style={{display:'flex', marginLeft:'270px', marginTop:'100px'}}>
        <div className='BookImg'>
          <img src='https://us.123rf.com/450wm/kolazig/kolazig1811/kolazig181100198/113121165-open-book-on-a-dark-brown-background.jpg?ver=6' ></img>
        </div>
        <div className='BookImage'>
          <img src='https://media.cnn.com/api/v1/images/stellar/prod/171116173132-28b-websize-tianjin-library-ssip.jpg?q=w_1600,h_900,x_0,y_0,c_fill'></img>
        </div>
        <div className='BookImg'>
          <img src='https://us.123rf.com/450wm/kolazig/kolazig1811/kolazig181100198/113121165-open-book-on-a-dark-brown-background.jpg?ver=6' ></img>
        </div>
      </div>
      <div className='rr'>
        <p >magna aliqua. Ut enim ad minim veniam,quis nostrud</p>
        <p className='rp'>exercitation ullamco laboris</p>
      </div>
      <div>
        <button type='submit' className='read'>Read More</button>
      </div>
      <div className='bio-container' style={{display:'flex', marginTop:'150px'}}>
        <div className='ebook'>
          <img src='/image/123.png' alt='Subscription Image' />
        </div>
        <div className="book-content"style={{marginLeft:'70px'}}>
          <h1>Download Our Ebook for Free</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et nisi modi quae ducimus, animi aperiam mollitia vitae atque nesciunt at corporis a impedit eum accusamus laudantium, perferendis distinctio. Dolorum, hic.</p>
          <div className="downlodbook">
            <h3>E-book for read</h3>
            <div className="icon-downlod">
              <FaDownload></FaDownload>
            </div>
          </div>
            <button className="button" onClick={redirectToBookApp}>Click to Free Book</button>
        </div>
      </div>
      <div className="slider">
        <div className="box">
        </div>
        <div className='abcdP'>
          <h2>Our Satisfied Readers</h2>
        </div>
        <Slider {...settings}>
          <div className="video-container">
            <div style={{marginLeft:'250px', marginTop:'40px'}}>
              <FaRegStar style={{fontSize:'30px', marginRight:'10px'}}></FaRegStar>
              <FaRegStar style={{fontSize:'30px', marginRight:'10px'}}></FaRegStar>
              <FaRegStar style={{fontSize:'30px', marginRight:'10px'}}></FaRegStar>
              <FaRegStar style={{fontSize:'30px', marginRight:'10px'}}></FaRegStar>
              <FaRegStar style={{fontSize:'30px'}}></FaRegStar>
            </div>
            <div className='text-bio' style={{marginLeft:'250px',fontStyle:'italic',color:'white'}}>
              <p>Set a goal to read just a little more each day than you normally do.    If you don't read at all, you can set a goal to read 3-5 pages a day. If you normally read around 25 minutes each day, read for 30. If you use Todoist, create a task that recurs every day with the number of pages</p>
            </div>
            <div style={{display:'flex'}}>
              <div style={{width:'100px', height:'100px',borderRadius:'800px', overflow:'hidden', marginLeft:'250px', marginTop:'30px' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpc4Ztq3HWwNbVQ089po4jlrb5v21mn-c2qQ&s"/>
              </div>
              <div style={{marginLeft:'30px',marginTop:'20px',color:'white'}}>
                <h2 style={{fontStyle:'italic'}}>Randy</h2>
                <h4>Readers</h4>
              </div>
            </div>
          </div>
          <div className="video-container">
            <div style={{marginLeft:'250px', marginTop:'40px'}}>
              <FaRegStar style={{fontSize:'30px', marginRight:'10px'}}></FaRegStar>
              <FaRegStar style={{fontSize:'30px', marginRight:'10px'}}></FaRegStar>
              <FaRegStar style={{fontSize:'30px', marginRight:'10px'}}></FaRegStar>
              <FaRegStar style={{fontSize:'30px', marginRight:'10px'}}></FaRegStar>
              <FaRegStar style={{fontSize:'30px'}}></FaRegStar>
            </div>
            <div className='text-bio' style={{marginLeft:'250px',fontStyle:'italic',color:'white'}}>
              <p>Set a goal to read just a little more each day than you normally do.If you don't read at all, you can set a goal to read 3-5 pages a day. If you normally read around 25 minutes each day, read for 30. If you use Todoist, create a task that recurs every day with the number of pages</p>
            </div>
            <div style={{display:'flex'}}>
              <div style={{width:'100px', height:'100px',borderRadius:'800px', overflow:'hidden', marginLeft:'250px', marginTop:'30px' }}>
                <img src="data:image/jpeg;base64,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"/>
              </div>
              <div style={{marginLeft:'30px',marginTop:'20px',color:'white'}}>
                <h2 style={{fontStyle:'italic'}}>Emma&Emy</h2>
                <h4>Readers</h4>
              </div>
            </div>
          </div>
        </Slider>
        <div style={{marginLeft:'1000px', marginTop:'-500px'}}>
          <img src='https://kitpro.site/laluna/wp-content/uploads/sites/174/2023/06/Image-1.jpg' style={{height:'500px', borderRadius:'40px'}}></img>
        </div>
        <div style={{marginLeft:'1340px', marginTop:'-570px'}}>
          <img src='https://kitpro.site/laluna/wp-content/uploads/sites/174/2023/06/Sakura-08-465x1024.png' style={{height:'600px'}}></img>
        </div>
      </div>
      <div className='email' style={{marginTop:'200px'}}>
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



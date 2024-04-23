import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css';

export const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo3.svg"/>
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo4.svg"/>
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo5.svg"/>
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo1.svg"/>
          </div>
          <div>
            <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/04/featured-logo2.svg"/>
          </div>
        </div>
      </div>
      <div className='Personal'>
        <div className='bio-image2'>
          <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/about-image.png" alt='Profile' />
        </div>
      </div>
      <div className='text-bio-2'>
        <h1>A Word From The Author</h1>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        <button className="btn">READ MORE</button>
         <div style={styles.line}></div>
      </div>
      <div>
      <div className='story'>
        <div className='bio-image'>
          <img src="https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/about-image-02.png" alt='Profile' />
        </div>
      </div>
      <div className='text-bio'>
        <h1> My Story</h1>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>

      </div>
    </div>
  );
};

const styles = {
  line: {
    position: 'absolute',
    top: '90%',
    left: '50%',
    marginTop: '870px',
    transform: 'translate(-50%, -50%)',
    width: '590px',
    height: '0.5px',
    backgroundColor: ' #946659',
    marginLeft: '340px',
  },
}
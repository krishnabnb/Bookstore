import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.links}>
          <a href="#" style={styles.link}>Home</a>
          <a href="#" style={styles.link}>Bio</a>
          <a href="#" style={styles.link}>Books</a>
          <a href="#" style={styles.link}>Contact</a>
        </div>
        <div style={styles.icons}>
          <a href='#'><FaInstagram color="white" /></a>
          <a href='#'><FaFacebook color="white" /></a>
          <a href='#'><FaTwitter color="white" /></a>
        </div>
      </div>
      <div className="image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQGH6_1Q5hZbccQanQsEx_fN9qN6hlQ1Ifg&usqp=CAU"
          alt="Sample Image"
          style={styles.image}
        />
        <div className="white-line"></div>
      </div>

      <div style={styles.copyright}>
        &nbsp;
        <br />
        &nbsp;
        Copyright © 2024 eBook Author | Powered by eBook Author
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#000435',
    color: '#fff',
    padding: '20px 0',
    marginTop: '-17px',
    textAlign: 'center',
    height: '150px'
  },
  container: {
    maxWidth: '1600px',
    margin: '0 auto',
    position: 'relative',
  },
  links: {
    position: 'absolute',
    top: 'calc(50% + 30px)',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 10px',
    transition: 'color 0.3s ease',
    fontSize: '14px',
  },
  icons: {
    position: 'absolute',
    top: 'calc(50% + 30px)',
    right: '0',
    marginRight: '350px',
    transform: 'translateY(-10%)',
    display: 'flex',
    gap: '20px',
  },
  image: {
    width: '150px',
    height: 'auto',
    marginLeft: '-850px',
    marginBottom: '50px',
  },
  copyright: {
    color: 'white',
    marginTop: '5px',
    marginBottom: '30px',
    fontSize: '14px',
  },
};

export default Footer;

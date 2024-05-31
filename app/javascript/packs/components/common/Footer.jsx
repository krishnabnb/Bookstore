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
        <img src='https://imgs.search.brave.com/3z7Bm-6WaJA9mjZMmBdftSi1A2UKlxGm2sqdJHN3LkA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMjEvT3Bl/bi1Cb29rLVBORy5w/bmc' style={{height:'80px', marginRight:'700px'}}/>
        <div><h2 style={{marginTop:'5px', marginRight:'700px'}}>BOOKSTORE</h2></div>
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
    marginTop: '-10px',
    marginBottom: '30px',
    fontSize: '14px',
  },
};

export default Footer;

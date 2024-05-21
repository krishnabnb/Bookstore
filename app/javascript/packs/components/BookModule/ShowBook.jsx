import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './showbook.css';

const ShowBook = ({ bookId }) => { // Accept bookId as props
  const [bookData, setBookData] = useState({});
  const [bannerImageUrl, setBannerImageUrl] = useState('');

  const fetchBookDetails = async (id) => { // Accept id as parameter
    try {
      const response = await axios.get(`http://192.168.1.11:3000/api/v1/books/${id}`);
      const { book, banner_image_url } = response.data;
      setBookData(book);
      setBannerImageUrl(banner_image_url);
    } catch (error) {
      console.error('Error fetching book details:', error);
    }
  };

  useEffect(() => {
    // Call fetchBookDetails with the book ID passed as props
    fetchBookDetails(bookId);
  }, [bookId]);
  return (

    <div>
      <div className="banner-image">
        <img src={bannerImageUrl} alt="Banner Image" className="banner-image" />
      </div>
      <table className="book-details">
        <tbody>
      <h1>{bookData.title}'s  Show page</h1>
          <tr>
            <td>Title:</td>
            <td>{bookData.title}</td>
          </tr>
          <tr>
            <td>Author:</td>
            <td>{bookData.author}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{bookData.description}</td>
          </tr>
          <tr>
            <td>Published Date:</td>
            <td>{bookData.published_at}</td>
          </tr>
          <tr>
            <td>Published Status:</td>
            <td>{bookData.published_status}</td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>${bookData.price}</td>
          </tr>
        </tbody>
      </table>
      <div className="book-image">
        <h2>Book Image:</h2><img src={bookData.image_url} alt="Book Image" />
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

export default ShowBook;

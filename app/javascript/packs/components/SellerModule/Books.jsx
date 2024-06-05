import React, { useState, useEffect } from 'react';
import '../SellerModule/saler.css';
import { NewBook } from '../BookModule/NewBook';
import { RiDeleteBin5Line } from "react-icons/ri";
import toastr from 'toastr';
import 'toastr/build/toastr.css';

export const Books = () => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });

  const [error, setError] = useState(null);
  const [originalBooks, setOriginalBooks] = useState({});
  const [searchQuery, setSearchQuery] = useState({ title: '', description: '', published_at: '', published_status: ''});
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelData, setModelData] = useState(null);
  const [banner, setBannerImageUrl] = useState('');

  const fetchBookDetails = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.8:3000/api/v1/books/${id}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status.message);
      }
      const bookData = await response.json();
      const { banner_image_url } = bookData;
      setBannerImageUrl(banner_image_url);
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching book details:', error);
      setError(error.message);
      toastr.error('Login failed: ' + error.message);
    }
  };

  const handleShowModal = (book) => {
    setIsModalOpen(true);
    setModelData(book)
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchBooks();
  }, [modelData]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://192.168.1.8:3000/api/v1/books');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setBooks(data?.book || []);
      setOriginalBooks(Object.fromEntries(data?.book?.map(book => [book.id, book])) || {});
      await fetchBook();
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  const fetchBook = async () => {
    try {
      const response = await fetch('http://192.168.1.8:3000/api/v1/saler_books');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('data', data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  const handleFormSubmit = async (title, author, description, price, published_at, saler_id, image) => {
    const formdata = new FormData();
    formdata.append("book[title]", title);
    formdata.append("book[author]", author);
    formdata.append("book[description]", description);
    formdata.append("book[price]", price);
    formdata.append("book[published_at]", published_at);
    formdata.append("book[saler_id]", saler_id);
    if (image) {
      formdata.append("book[image]", image);
    }
    try {
      const response = await fetch('http://192.168.1.8:3000/api/v1/books', {
        method: 'POST',
        body: formdata,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.status.message);
      }
      const newBook = await response.json();
      addNewBook(newBook);
      await fetchBooks()
    } catch (error) {
      console.error('Error adding book:', error);
      setError(error.message);
      toastr.error(error.message);
    }
  };

  const addNewBook = book => {
    setBooks(prevBooks => [...prevBooks, book]);
  };

  const handleImageChange = async (e, book) => {
    try {
      const file = e.target.files[0];
      console.log("Selected file:", file);
      setImage(file);
      const formdata = new FormData();
      formdata.append("book[image]", file);
      const response = await fetch(`http://192.168.1.8:3000/api/v1/books/${book.id}`, {
        method: 'PUT',
        body: formdata,
      });
      const updatedBook = await response.json();
      console.log("Updated book:", updatedBook);
      updateBook(updatedBook);
      await fetchBooks();
    } catch (error) {
      console.error('Error updating book image:', error);
      setError(error.message);
    }
  };

  const handleBImageChange = async (e, book) => {
    try {
      const file = e.target.files[0];
      setImage(file);
      const formdata = new FormData();
      formdata.append("book[banner_image]", file);
      const response = await fetch(`http://192.168.1.8:3000/api/v1/books/${book.id}`, {
        method: 'PATCH',
        body: formdata,
      });
      const updatedBook = await response.json();
      updateBook(updatedBook.book);
      setBannerImageUrl(updatedBook.book.banner_image_url)
      await fetchBooks();
    } catch (error) {
      console.error('Error updating book image:', error);
      setError(error.message);
    }
  };

  const handleSearch = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (searchQuery.title) queryParams.append('title', searchQuery.title);
      if (searchQuery.description) queryParams.append('description', searchQuery.description);
      if (searchQuery.published_at) queryParams.append('published_at', searchQuery.published_at);
      if (searchQuery.published_status) queryParams.append('published_status', searchQuery.published_status);
      const url = `http://192.168.1.8:3000/api/v1/books?${queryParams.toString()}`;
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setBooks(data?.book || []);
      }else {
        throw new Error('Failed to fetch data');
      }
    }catch (error) {
      console.error('Error searching data:', error);
      setError(error.message);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleCancelSearch = () => {
    setSearchQuery({ title: '', description: '', published_at: '', published_status: ''});
    fetchBooks();
  };

  const handleImageDelete = async (bookId, type) => {
    try {
      const response = await fetch(`http://192.168.1.8:3000/api/v1/books/${bookId}/image_destroy`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type })
      });
      if (response.ok) {
        updateBookImage(bookId, null);
      } else {
        throw new Error('Failed to delete image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <div>
      <div>
        <div>
          <div className='bio-container'>
            <div className='title-2'>
              <h1>Books</h1>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            </div>
          </div>
        </div>
        <div className='form-field'>
          <NewBook handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <form className="search-form">
        <input type="text" name="title" placeholder="Search by title" className='search-input' value={searchQuery.title} onChange={handleSearchInputChange} />
        <input type="text" name="description" placeholder="Search by description" className='search-input' value={searchQuery.description} onChange={handleSearchInputChange} />
        <input type="text" name="published_at" placeholder="Search by published_at" className='search-input' value={searchQuery.published_at} onChange={handleSearchInputChange} />
        <input type="text" name="published_status" placeholder="Search by published_status" className='search-input' value={searchQuery.published_status} onChange={handleSearchInputChange} />
        <button type="button" className='searchButton' onClick={handleSearch}>Search</button>
        <button type="button" className='cancelButton' onClick={handleCancelSearch}>Cancel</button>
      </form>
      <div className="card-container">
        {Array.isArray(books) && books.map((book) => (
          <div key={book.id} className="card">
            <img src={book.image_url} alt="Book Cover" onClick={() => { handleShowModal(book); fetchBookDetails(book.id); }} />
            {isModalOpen && modelData && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModal}>&times;</span>
                  <div>
                    <img src={banner} alt="saler's image" style={{ width: '1750px', height: '500px' }} />
                    <input type="file" onChange={e => handleBImageChange(e, book)} name="image" />
                    <div><RiDeleteBin5Line onClick={() => handleImageDelete(book.id, 'banner_image')} /></div>
                    <div><img src={modelData.image_url} alt="saler's image" style={{ width: '300px', height: '300px', float: 'right', marginRight: '500px', marginTop: '20px' }} /></div>
                    <div style={{ marginLeft: '500px' }}>
                      <h3>Title: {modelData.title}</h3>
                      <h3>Author: {modelData.author}</h3>
                      <h3>Description: {modelData.description}</h3>
                      <h3>Price: {modelData.price}</h3>
                      <h3>Published Status: {modelData.published_status}</h3>
                      <h3>Published At: {modelData.published_at}</h3>
                      <h3>Saler_id: {modelData.saler_id}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div>
              <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
            </div>
          </div>
        ))}
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

import React, { useState, useEffect } from 'react';
import '../SellerModule/saler.css';
import { RiDeleteBin5Line } from "react-icons/ri";
import toastr from 'toastr';
import 'toastr/build/toastr.css';

export const Book = () => {
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
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const handleAddToCart = (book) => {
    const existingBookIndex = selectedBooks.findIndex((selectedBook) => selectedBook.id === book.id);
    if (existingBookIndex !== -1) {
      const updatedSelectedBooks = [...selectedBooks];
      updatedSelectedBooks[existingBookIndex].quantity += 1;
      setSelectedBooks(updatedSelectedBooks);
    } else {
      setSelectedBooks((prevSelectedBooks) => [...prevSelectedBooks, { ...book, quantity: 1 }]);
    }
    setIsModalOpen(true);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + Number(book.price));
  };

  const incrementQuantity = (bookId) => {
    const updatedSelectedBooks = selectedBooks.map((book) =>
      book.id === bookId ? { ...book, quantity: book.quantity + 1 } : book
    );
    setSelectedBooks(updatedSelectedBooks);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + getBookPrice(bookId));
  };

  const decrementQuantity = (bookId) => {
    const updatedSelectedBooks = selectedBooks.map((book) =>
      book.id === bookId && book.quantity > 1 ? { ...book, quantity: book.quantity - 1 } : book
    );
    setSelectedBooks(updatedSelectedBooks);
    setTotalPrice((prevTotalPrice) => prevTotalPrice - getBookPrice(bookId));
  };

  const getBookPrice = (bookId) => {
    const book = selectedBooks.find((book) => book.id === bookId);
    return book ? Number(book.price) : 0;
  };

    const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCheckoutButtonClick = () => {
    setIsCheckoutModalOpen(true);
  };

  const handleCheckoutClose = () => {
    setIsCheckoutModalOpen(false);
  };

  const handlePayment = () => {
    if (paymentMethod === 'cash') {
      toastr.success('Cash payment successful');
      window.location.href = '/customer';
    } else if (paymentMethod === 'online') {
      toastr.success('Online payment successful');
      window.location.href = '/customer';
    } else {
      toastr.error('Please select a payment method');
    }
    setSelectedBooks([]);
    setTotalPrice(0);
    setIsCheckoutModalOpen(false);
  };

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
    } catch (error) {
      console.error('Error fetching data:', error);
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
      </div>
      <form className="search-form">
        <input type="text" name="title" placeholder="Search by title" className='search-input' value={searchQuery.title} onChange={handleSearchInputChange} />
        <input type="text" name="description" placeholder="Search by description" className='search-input' value={searchQuery.description} onChange={handleSearchInputChange} />
        <input type="text" name="published_at" placeholder="Search by published_at" className='search-input' value={searchQuery.published_at} onChange={handleSearchInputChange} />
        <input type="text" name="published_status" placeholder="Search by published_status" className='search-input' value={searchQuery.published_status} onChange={handleSearchInputChange} />
        <button type="button" className='searchButton' onClick={handleSearch}>Search</button>
        <button type="button" className='cancelButton' onClick={handleCancelSearch}>Cancel</button>
      </form>
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Array.isArray(books) && books.map((book) => (
          <div key={book.id} className="card">
            <img src={book.image_url} alt="Book Cover" onClick={() => { handleShowModal(book); fetchBookDetails(book.id); }} />
            {isModalOpen && modelData && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModal}>&times;</span>
                  <div>
                    <img src={banner} alt="saler's image" style={{ width: '1750px', height: '500px' }} />
                    <div><img src={modelData.image_url} alt="saler's image" style={{ width: '300px', height: '300px', float: 'right', marginRight: '500px', marginTop: '20px' }} /></div>
                    <div style={{ marginLeft: '500px' }}>
                      <h3>Title: {modelData.title}</h3>
                      <h3>Author: {modelData.author}</h3>
                      <h3>Description: {modelData.description}</h3>
                      <h3>Price: {modelData.price}</h3>
                      <h3>Published Status: {modelData.published_status}</h3>
                      <h3>Published At: {modelData.published_at}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div>
              <button className="btn btn-primary " onClick={() => handleAddToCart(book)}>Add to Cart</button>
            </div>
          </div>
        ))}
        {selectedBooks.length > 0 && isModalOpen && (
          <div className="modal">
            <div className="modalbook">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedBooks.map((selectedBook) => (
                    <tr key={selectedBook.id}>
                      <td>{selectedBook.title}</td>
                      <td>${selectedBook.price}</td>
                      <td><img src={selectedBook.image_url} alt="Book Cover" style={{height:'50px'}}/></td>
                      <td>
                        <button onClick={() => decrementQuantity(selectedBook.id)}>-</button>
                        {selectedBook.quantity}
                        <button onClick={() => incrementQuantity(selectedBook.id)}>+</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <h2>Total Price: ${totalPrice}</h2>
              </div>
              <div className="checkout-modal">
            <h2>Checkout</h2>
            <form>
              <div>
                <input
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  checked={paymentMethod === 'cash'}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="cash">Cash</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="online"
                  name="paymentMethod"
                  value="online"
                  checked={paymentMethod === 'online'}
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="online">Online</label>
              </div>
            </form>
            <button onClick={handlePayment}>Pay Now</button>
            <button onClick={handleCheckoutClose}>Cancel</button>
          </div>
            </div>
          </div>
        )}
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

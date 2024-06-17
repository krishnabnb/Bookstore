// // import React, { useState, useEffect } from 'react';
// // import '../SellerModule/saler.css';
// // import toastr from 'toastr';
// // import 'toastr/build/toastr.css';

// // export const Book = () => {
// //   const [books, setBooks] = useState([]);
// //   const [error, setError] = useState(null);
// //   const [originalBooks, setOriginalBooks] = useState({});
// //   const [searchQuery, setSearchQuery] = useState({ title: '', description: '', published_at: '', published_status: ''});
// //   const [image, setImage] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [modelData, setModelData] = useState(null);
// //   const [banner, setBannerImageUrl] = useState('');
// //   const [selectedBooks, setSelectedBooks] = useState([]);
// //   const [totalPrice, setTotalPrice] = useState(0);
// //   const [paymentMethod, setPaymentMethod] = useState('cash');
// //   const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

// //   const handleAddToCart = (book) => {
// //     const existingBookIndex = selectedBooks.findIndex((selectedBook) => selectedBook.id === book.id);
// //     if (existingBookIndex !== -1) {
// //       const updatedSelectedBooks = [...selectedBooks];
// //       updatedSelectedBooks[existingBookIndex].quantity += 1;
// //       setSelectedBooks(updatedSelectedBooks);
// //     } else {
// //       setSelectedBooks((prevSelectedBooks) => [...prevSelectedBooks, { ...book, quantity: 1 }]);
// //     }
// //     setIsModalOpen(true);
// //     setTotalPrice((prevTotalPrice) => prevTotalPrice + Number(book.price));
// //   };

// //   const incrementQuantity = (bookId) => {
// //     const updatedSelectedBooks = selectedBooks.map((book) =>
// //       book.id === bookId ? { ...book, quantity: book.quantity + 1 } : book
// //     );
// //     setSelectedBooks(updatedSelectedBooks);
// //     setTotalPrice((prevTotalPrice) => prevTotalPrice + getBookPrice(bookId));
// //   };

// //   const decrementQuantity = (bookId) => {
// //     const updatedBook = selectedBooks.find((book) => book.id === bookId);
// //     if (!updatedBook || updatedBook.quantity === 1) {
// //       toastr.error('Quantity can not be less than 1');
// //       return;
// //     }

// //     const updatedSelectedBooks = selectedBooks.map((book) =>
// //       book.id === bookId ? { ...book, quantity: book.quantity - 1 } : book
// //     );
// //     setSelectedBooks(updatedSelectedBooks);
// //     setTotalPrice((prevTotalPrice) => prevTotalPrice - getBookPrice(bookId));
// //   };

// //   const getBookPrice = (bookId) => {
// //     const book = selectedBooks.find((book) => book.id === bookId);
// //     return book ? Number(book.price) : 1;
// //   };

// //   const handlePaymentMethodChange = (e) => {
// //     setPaymentMethod(e.target.value);
// //   };

// //   const handleCheckoutClose = () => {
// //     setIsCheckoutModalOpen(false);
// //   };

// //   const handlePayment = () => {
// //     if (paymentMethod === 'cash' || paymentMethod === 'online') {
// //       const queryParams = new URLSearchParams();
// //       queryParams.append('totalPrice', totalPrice.toFixed(2));
// //       queryParams.append('paymentMethod', paymentMethod);
// //       const queryString = queryParams.toString();
// //       if (paymentMethod === 'cash') {
// //         toastr.success('Cash payment successful');
// //       } else if (paymentMethod === 'online') {
// //         toastr.success('Online payment successful');
// //       }
// //       window.location.href = `/customer?${queryString}`;
// //       setSelectedBooks([]);
// //       setTotalPrice(0);
// //       setIsCheckoutModalOpen(false);
// //     } else {
// //       toastr.error('Please select a payment method');
// //     }
// //   };

// //   const fetchBookDetails = async (id) => {
// //     try {
// //       const response = await fetch(`http://192.168.1.8:3000/api/v1/books/${id}`);
// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(errorData.status.message);
// //       }
// //       const bookData = await response.json();
// //       const { banner_image_url } = bookData;
// //       setBannerImageUrl(banner_image_url);
// //       setIsModalOpen(true);
// //     } catch (error) {
// //       console.error('Error fetching book details:', error);
// //       setError(error.message);
// //       toastr.error('Login failed: ' + error.message);
// //     }
// //   };

// //   const handleShowModal = (book) => {
// //     setIsModalOpen(true);
// //     setModelData(book);
// //   };

// //   const handleCloseModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   useEffect(() => {
// //     fetchBooks();
// //   }, [modelData]);

// //   const fetchBooks = async () => {
// //     try {
// //       const response = await fetch('http://192.168.1.8:3000/api/v1/books');
// //       if (!response.ok) {
// //         throw new Error('Failed to fetch data');
// //       }
// //       const data = await response.json();
// //       setBooks(data?.book || []);
// //       setOriginalBooks(Object.fromEntries(data?.book?.map(book => [book.id, book])) || {});
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //       setError(error.message);
// //     }
// //   };

// //   const handleSearch = async () => {
// //     try {
// //       const queryParams = new URLSearchParams();
// //       if (searchQuery.title) queryParams.append('title', searchQuery.title);
// //       if (searchQuery.description) queryParams.append('description', searchQuery.description);
// //       if (searchQuery.published_at) queryParams.append('published_at', searchQuery.published_at);
// //       if (searchQuery.published_status) queryParams.append('published_status', searchQuery.published_status);
// //       const url = `http://192.168.1.8:3000/api/v1/books?${queryParams.toString()}`;
// //       const response = await fetch(url);
// //       if (response.ok) {
// //         const data = await response.json();
// //         setBooks(data?.book || []);
// //       } else {
// //         throw new Error('Failed to fetch data');
// //       }
// //     } catch (error) {
// //       console.error('Error searching data:', error);
// //       setError(error.message);
// //     }
// //   };

// //   const handleSearchInputChange = (e) => {
// //     setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
// //   };

// //   const handleCancelSearch = () => {
// //     setSearchQuery({ title: '', description: '', published_at: '', published_status: '' });
// //     fetchBooks();
// //   };

// //   return (
// //     <div>
// //       <div>
// //         <div>
// //           <div className='bio-container'>
// //             <div className='title-2'>
// //               <h1>Book</h1>
// //               <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //       <form className="search-form">
// //         <div style={{ display: 'flex' }}>
// //           <input type="text" name="title" placeholder="Search by title" className='search-input' value={searchQuery.title} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
// //           <input type="text" name="description" placeholder="Search by description" className='search-input' value={searchQuery.description} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
// //           <input type="text" name="published_at" placeholder="Search by published_at" className='search-input' value={searchQuery.published_at} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
// //           <input type="text" name="published_status" placeholder="Search by published_status" className='search-input' value={searchQuery.published_status} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
// //           <button type="button" className='searchButton' onClick={handleSearch} style={{ marginRight: '10px' }}>Search</button>
// //           <button type="button" className='cancelButton' onClick={handleCancelSearch}>Cancel</button>
// //         </div>
// //       </form><br></br>
// //       <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
// //         {Array.isArray(books) && books.map((book) => (
// //           <div key={book.id} className="card">
// //             <img src={book.image_url} alt="Book Cover" onClick={() => { handleShowModal(book); fetchBookDetails(book.id); }} />
// //             {isModalOpen && modelData && (
// //               <div className="modal">
// //                 <div className="modal-content">
// //                   <span className="close" onClick={handleCloseModal}>&times;</span>
// //                   <div>
// //                     <img src={modelData.banner_image_url} alt="book's image" style={{ width: '1750px', height: '500px' }} />
// //                     <div><img src={modelData.image_url} alt="book's image" style={{ width: '300px', height: '300px', float: 'right', marginRight: '500px', marginTop: '20px' }} /></div>
// //                     <div style={{ marginLeft: '500px' }}>
// //                       <h3>Title: {modelData.title}</h3>
// //                       <h3>Author: {modelData.author}</h3>
// //                       <h3>Description: {modelData.description}</h3>
// //                       <h3>Price: {modelData.price}</h3>
// //                       <h3>Published Status: {modelData.published_status}</h3>
// //                       <h3>Published At: {modelData.published_at}</h3>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //             <div>
// //               {book.price > 0 ? (
// //                 <button className="btn btn-primary" onClick={() => handleAddToCart(book)}>Add to Cart</button>
// //               ) : (
// //                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_qqCcg6VG4VjXCXhsCFv3nOSovERdbkvLw&s" alt="Book cover" ></img>
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //         {selectedBooks.length > 0 && isModalOpen && (
// //           <div className="modal">
// //             <div className="modalbook">
// //               <span className="close" onClick={handleCloseModal}>&times;</span>
// //               <table>
// //                 <thead>
// //                   <tr>
// //                     <th>Title</th>
// //                     <th>Price</th>
// //                     <th>Image</th>
// //                     <th>Quantity</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {selectedBooks.map((selectedBook) => (
// //                     <tr key={selectedBook.id}>
// //                       <td>{selectedBook.title}</td>
// //                       <td>${selectedBook.price}</td>
// //                       <td><img src={selectedBook.image_url} alt="Book Cover" style={{ height: '50px' }} /></td>
// //                       <td>
// //                         <button onClick={() => decrementQuantity(selectedBook.id)}>-</button>
// //                         {selectedBook.quantity}
// //                         <button onClick={() => incrementQuantity(selectedBook.id)}>+</button>
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </table>
// //               <div>
// //                 <h2>Total Price: ${totalPrice}</h2>
// //               </div>
// //               <div className="checkout-modal">
// //                 <h2>Checkout</h2>
// //                 <form>
// //                   <div>
// //                     <input
// //                       type="radio"
// //                       id="cash"
// //                       name="paymentMethod"
// //                       value="cash"
// //                       checked={paymentMethod === 'cash'}
// //                       onChange={handlePaymentMethodChange}
// //                     />
// //                     <label htmlFor="cash">Cash</label>
// //                   </div>
// //                   <div>
// //                     <input
// //                       type="radio"
// //                       id="online"
// //                       name="paymentMethod"
// //                       value="online"
// //                       checked={paymentMethod === 'online'}
// //                       onChange={handlePaymentMethodChange}
// //                     />
// //                     <label htmlFor="online">Online</label>
// //                   </div>
// //                 </form>
// //                 <button onClick={handlePayment}>Pay Now</button>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //       <div className='email'>
// //         <div className="left-side">
// //           <h2>Subscribe Now to Get Regular Updates</h2>
// //           <input type="email" placeholder="Enter your email" />
// //           <button className="subscribe-btn">Subscribe</button>
// //         </div>
// //         <div className='right-side'>
// //           <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='img' />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };



// import React, { useState, useEffect } from 'react';
// import '../SellerModule/saler.css';
// import toastr from 'toastr';
// import 'toastr/build/toastr.css';

// export const Book = () => {
//   const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);
//   const [originalBooks, setOriginalBooks] = useState({});
//   const [searchQuery, setSearchQuery] = useState({ title: '', description: '', published_at: '', published_status: ''});
//   const [image, setImage] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [modelData, setModelData] = useState(null);
//   const [banner, setBannerImageUrl] = useState('');
//   const [selectedBooks, setSelectedBooks] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const handleAddToCart = async (bookId) => {
//     try {
//       const token = sessionStorage.getItem('token');
//       if (!token) {
//         throw new Error('User not authenticated');
//       }
      
//       const response = await fetch('http://your-rails-backend-url/api/v1/cart_items', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           book_id: bookId,
//           quantity: 1,
//         }),
//       });
  
//       if (!response.ok) {
//         throw new Error('Failed to add book to cart');
//       }
  
//       const data = await response.json();
//       setSelectedBooks([...selectedBooks, data]);
  
//       toastr.success('Book added to cart successfully');
//     } catch (error) {
//       console.error('Error adding book to cart:', error);
//       toastr.error('Failed to add book to cart');
//     }
//   };
  

//   const incrementQuantity = async (cartId) => {
//     try {
//       const response = await fetch(`http://192.168.1.8:3000/api/v1/carts/${cartId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           quantity: 1,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update cart');
//       }

//       const updatedSelectedBooks = selectedBooks.map((book) =>
//         book.id === cartId ? { ...book, quantity: book.quantity + 1 } : book
//       );
//       setSelectedBooks(updatedSelectedBooks);

//       toastr.success('Quantity updated successfully');
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//       toastr.error('Failed to update quantity');
//     }
//   };

//   const decrementQuantity = async (bookId) => {
//     try {
//       const response = await fetch(`http://192.168.1.8:3000/api/v1/carts/${bookId}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           quantity: -1,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update cart');
//       }

//       const updatedBook = selectedBooks.find((book) => book.id === bookId);
//       if (!updatedBook || updatedBook.quantity === 1) {
//         toastr.error('Quantity can not be less than 1');
//         return;
//       }
//       const updatedSelectedBooks = selectedBooks.map((book) =>
//         book.id === bookId ? { ...book, quantity: book.quantity - 1 } : book
//       );
//       setSelectedBooks(updatedSelectedBooks);
//       setTotalPrice((prevTotalPrice) => prevTotalPrice - getBookPrice(bookId));
//       toastr.success('Quantity updated successfully');
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//       toastr.error('Failed to update quantity');
//     }
//   };

//   const getBookPrice = (bookId) => {
//     const book = selectedBooks.find((book) => book.id === bookId);
//     return book ? Number(book.price) : 1;
//   };

//   const fetchBookDetails = async (id) => {
//     try {
//       const response = await fetch(`http://192.168.1.8:3000/api/v1/books/${id}`);
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.status.message);
//       }
//       const bookData = await response.json();
//       const { banner_image_url } = bookData;
//       setBannerImageUrl(banner_image_url);
//       setIsModalOpen(true);
//     } catch (error) {
//       console.error('Error fetching book details:', error);
//       setError(error.message);
//       toastr.error('Login failed: ' + error.message);
//     }
//   };

//   const handleShowModal = (book) => {
//     setIsModalOpen(true);
//     setModelData(book);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   useEffect(() => {
//     fetchBooks();
//   }, [modelData]);

//   const fetchBooks = async () => {
//     try {
//       const response = await fetch('http://192.168.1.8:3000/api/v1/books');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       setBooks(data?.book || []);
//       setOriginalBooks(Object.fromEntries(data?.book?.map(book => [book.id, book])) || {});
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(error.message);
//     }
//   };

//   const handleSearch = async () => {
//     try {
//       const queryParams = new URLSearchParams();
//       if (searchQuery.title) queryParams.append('title', searchQuery.title);
//       if (searchQuery.description) queryParams.append('description', searchQuery.description);
//       if (searchQuery.published_at) queryParams.append('published_at', searchQuery.published_at);
//       if (searchQuery.published_status) queryParams.append('published_status', searchQuery.published_status);
//       const url = `http://192.168.1.8:3000/api/v1/books?${queryParams.toString()}`;
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         setBooks(data?.book || []);
//       } else {
//         throw new Error('Failed to fetch data');
//       }
//     } catch (error) {
//       console.error('Error searching data:', error);
//       setError(error.message);
//     }
//   };

//   const handleSearchInputChange = (e) => {
//     setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
//   };

//   const handleCancelSearch = () => {
//     setSearchQuery({ title: '', description: '', published_at: '', published_status: '' });
//     fetchBooks();
//   };

//   return (
//     <div>
//       <div>
//         <div>
//           <div className='bio-container'>
//             <div className='title-2'>
//               <h1>Book</h1>
//               <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <form className="search-form">
//         <div style={{ display: 'flex' }}>
//           <input type="text" name="title" placeholder="Search by title" className='search-input' value={searchQuery.title} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
//           <input type="text" name="description" placeholder="Search by description" className='search-input' value={searchQuery.description} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
//           <input type="text" name="published_at" placeholder="Search by published_at" className='search-input' value={searchQuery.published_at} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
//           <input type="text" name="published_status" placeholder="Search by published_status" className='search-input' value={searchQuery.published_status} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
//           <button type="button" className='searchButton' onClick={handleSearch} style={{ marginRight: '10px' }}>Search</button>
//           <button type="button" className='cancelButton' onClick={handleCancelSearch}>Cancel</button>
//         </div>
//       </form><br></br>
//       <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//         {Array.isArray(books) && books.map((book) => (
//           <div key={book.id} className="card">
//             <img src={book.image_url} alt="Book Cover" onClick={() => { handleShowModal(book); fetchBookDetails(book.id); }} />
//             {isModalOpen && modelData && (
//               <div className="modal">
//                 <div className="modal-content">
//                   <span className="close" onClick={handleCloseModal}>&times;</span>
//                   <div>
//                     <img src={modelData.banner_image_url} alt="book's image" style={{ width: '1750px', height: '500px' }} />
//                     <div><img src={modelData.image_url} alt="book's image" style={{ width: '300px', height: '300px', float: 'right', marginRight: '500px', marginTop: '20px' }} /></div>
//                     <div style={{ marginLeft: '500px' }}>
//                       <h3>Title: {modelData.title}</h3>
//                       <h3>Author: {modelData.author}</h3>
//                       <h3>Description: {modelData.description}</h3>
//                       <h3>Price: {modelData.price}</h3>
//                       <h3>Published Status: {modelData.published_status}</h3>
//                       <h3>Published At: {modelData.published_at}</h3>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div>
//               {book.price > 0 ? (
//                 <button className="btn btn-primary" onClick={() => handleAddToCart(book)}>Add to Cart</button>
//               ) : (
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_qqCcg6VG4VjXCXhsCFv3nOSovERdbkvLw&s" alt="Book cover" ></img>
//               )}
//             </div>
//           </div>
//         ))}
//         {selectedBooks.length > 0 && isModalOpen && (
//           <div className="modal">
//             <div className="modalbook">
//               <span className="close" onClick={handleCloseModal}>&times;</span>
//               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                 {selectedBooks.map((selectedBook) => (
//                   <div key={selectedBook.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
//                     <img src={selectedBook.image_url} alt="Book Cover" style={{ height: '50px', marginRight: '10px' }} />
//                     <div style={{ display: 'flex', flexDirection: 'column' }}>
//                       <div style={{ marginBottom: '5px' }}>${selectedBook.price}</div>
//                       <div style={{ display: 'flex', alignItems: 'center' }}>
//                         <button onClick={() => decrementQuantity(selectedBook.id)} style={{ background: 'red', color:'black', marginRight: '5px' }}>-</button>
//                         <div style={{ marginRight: '5px' }}>{selectedBook.quantity}</div>
//                         <button onClick={() => incrementQuantity(selectedBook.id)} style={{ background: 'green', color:'black', marginLeft: '5px' }}>+</button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 <div>
//                   <h2>Total Price: ${totalPrice}</h2>
//                   <button>GO TO Cart</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <div className='email'>
//         <div className="left-side">
//           <h2>Subscribe Now to Get Regular Updates</h2>
//           <input type="email" placeholder="Enter your email" />
//           <button className="subscribe-btn">Subscribe</button>
//         </div>
//         <div className='right-side'>
//           <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='img' />
//         </div>
//       </div>
//     </div>
//   );
// };




import React, { useState, useEffect } from 'react';
import '../SellerModule/saler.css';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

export const Book = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [originalBooks, setOriginalBooks] = useState({});
  const [searchQuery, setSearchQuery] = useState({ title: '', description: '', published_at: '', published_status: ''});
  const [image, setImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelData, setModelData] = useState(null);
  const [banner, setBannerImageUrl] = useState('');
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const customerId = sessionStorage.getItem('customerid');


  // const handleAddToCart = async (book) => {
  //   try {
  //     const customerId = sessionStorage.getItem('customerid');
  //     if (!customerId) {
  //       throw new Error('Customer ID not found');
  //     }
  //     const response = await fetch('http://192.168.1.8:3000/api/v1/carts', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         customer_id: customerId,
  //         book_id: book.id,
  //         quantity: 1,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to add book to cart');
  //     }

  //     const existingBookIndex = selectedBooks.findIndex((selectedBook) => selectedBook.id === book.id);
  //     if (existingBookIndex !== -1) {
  //       const updatedSelectedBooks = [...selectedBooks];
  //       updatedSelectedBooks[existingBookIndex].quantity += 1;
  //       setSelectedBooks(updatedSelectedBooks);
  //     } else {
  //       setSelectedBooks((prevSelectedBooks) => [...prevSelectedBooks, { ...book, quantity: 1 }]);
  //     }
  //     setIsModalOpen(true);

  //     toastr.success('Book added to cart successfully');
  //   } catch (error) {
  //     console.error('Error adding book to cart:', error);
  //     toastr.error('Failed to add book to cart');
  //   }
  // };

  const handleAddToCart = async (bookId) => {
    try {
      const jsonwebtoken = sessionStorage.getItem('jsonwebtoken');
      const customerId = sessionStorage.getItem('customerid')
      if (!jsonwebtoken) {
        throw new Error('customer not authenticated');
      }

      const response = await fetch('http://192.168.1.8:3000/api/v1/cart_items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jsonwebtoken}`
        },
        body: JSON.stringify({
          customer_id: customerId,
          book_id: bookId,
          quantity: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add book to cart');
      }

      const data = await response.json();
      setSelectedBooks([...selectedBooks, data]);
      toastr.success('Book added to cart successfully');
    } catch (error) {
      console.error('Error adding book to cart:', error);
      toastr.error('Failed to add book to cart');
    }
  };

  const incrementQuantity = async (cartId) => {
    try {
      const response = await fetch(`http://192.168.1.8:3000/api/v1/carts/${cartId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update cart');
      }

      const updatedSelectedBooks = selectedBooks.map((book) =>
        book.id === cartId ? { ...book, quantity: book.quantity + 1 } : book
      );
      setSelectedBooks(updatedSelectedBooks);

      toastr.success('Quantity updated successfully');
    } catch (error) {
      console.error('Error updating quantity:', error);
      toastr.error('Failed to update quantity');
    }
  };

  const decrementQuantity = async (bookId) => {
    try {
      const response = await fetch(`http://192.168.1.8:3000/api/v1/carts/${bookId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          quantity: -1,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update cart');
      }

      const updatedBook = selectedBooks.find((book) => book.id === bookId);
      if (!updatedBook || updatedBook.quantity === 1) {
        toastr.error('Quantity can not be less than 1');
        return;
      }
      const updatedSelectedBooks = selectedBooks.map((book) =>
        book.id === bookId ? { ...book, quantity: book.quantity - 1 } : book
      );
      setSelectedBooks(updatedSelectedBooks);
      setTotalPrice((prevTotalPrice) => prevTotalPrice - getBookPrice(bookId));
      toastr.success('Quantity updated successfully');
    } catch (error) {
      console.error('Error updating quantity:', error);
      toastr.error('Failed to update quantity');
    }
  };

  const getBookPrice = (bookId) => {
    const book = selectedBooks.find((book) => book.id === bookId);
    return book ? Number(book.price) : 1;
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
    setModelData(book);
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
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error searching data:', error);
      setError(error.message);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery({ ...searchQuery, [e.target.name]: e.target.value });
  };

  const handleCancelSearch = () => {
    setSearchQuery({ title: '', description: '', published_at: '', published_status: '' });
    fetchBooks();
  };

  return (
    <div>
      <div>
        <div>
          <div className='bio-container'>
            <div className='title-2'>
              <h1>Book</h1>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            </div>
          </div>
        </div>
      </div>
      <form className="search-form">
        <div style={{ display: 'flex' }}>
          <input type="text" name="title" placeholder="Search by title" className='search-input' value={searchQuery.title} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
          <input type="text" name="description" placeholder="Search by description" className='search-input' value={searchQuery.description} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
          <input type="text" name="published_at" placeholder="Search by published_at" className='search-input' value={searchQuery.published_at} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
          <input type="text" name="published_status" placeholder="Search by published_status" className='search-input' value={searchQuery.published_status} onChange={handleSearchInputChange} style={{ marginRight: '10px' }} />
          <button type="button" className='searchButton' onClick={handleSearch} style={{ marginRight: '10px' }}>Search</button>
          <button type="button" className='cancelButton' onClick={handleCancelSearch}>Cancel</button>
        </div>
      </form><br></br>
      <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {Array.isArray(books) && books.map((book) => (
          <div key={book.id} className="card">
            <img src={book.image_url} alt="Book Cover" onClick={() => { handleShowModal(book); fetchBookDetails(book.id); }} />
            {isModalOpen && modelData && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={handleCloseModal}>&times;</span>
                  <div>
                    <img src={modelData.banner_image_url} alt="book's image" style={{ width: '1750px', height: '500px' }} />
                    <div><img src={modelData.image_url} alt="book's image" style={{ width: '300px', height: '300px', float: 'right', marginRight: '500px', marginTop: '20px' }} /></div>
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
              {book.price > 0 ? (
                <button className="btn btn-primary" onClick={() => handleAddToCart(book)}>Add to Cart</button>
              ) : (
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD_qqCcg6VG4VjXCXhsCFv3nOSovERdbkvLw&s" alt="Book cover" ></img>
              )}
            </div>
          </div>
        ))}
        {selectedBooks.length > 0 && isModalOpen && (
          <div className="modal">
            <div className="modalbook">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {selectedBooks.map((selectedBook) => (
                  <div key={selectedBook.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={selectedBook.image_url} alt="Book Cover" style={{ height: '50px', marginRight: '10px' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ marginBottom: '5px' }}>${selectedBook.price}</div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button onClick={() => decrementQuantity(selectedBook.id)} style={{ background: 'red', color:'black', marginRight: '5px' }}>-</button>
                        <div style={{ marginRight: '5px' }}>{selectedBook.quantity}</div>
                        <button onClick={() => incrementQuantity(selectedBook.id)} style={{ background: 'green', color:'black', marginLeft: '5px' }}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
                <div>
                  <h2>Total Price: ${totalPrice}</h2>
                  <button>GO TO Cart</button>
                </div>
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
          <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='img' />
        </div>
      </div>
    </div>
  );
};

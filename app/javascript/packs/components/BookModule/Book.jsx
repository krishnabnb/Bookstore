import React, { useState, useEffect } from 'react';
import '../SellerModule/saler.css';
import { NewBook } from './NewBook';
import { RiDeleteBin5Line } from "react-icons/ri";

export const Book = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [editModes, setEditModes] = useState({});
  const [originalBooks, setOriginalBooks] = useState({});
  const [image, setImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState({
    title: '',
    description: '',
    published_at: '',
    published_status: ''
  });

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://192.168.1.11:3000/api/v1/books');
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

  const handleFormSubmit = async (title, author, description, price, published_at, image) => {
    const formdata = new FormData();
    formdata.append("book[title]", title);
    formdata.append("book[author]", author);
    formdata.append("book[description]", description);
    formdata.append("book[price]", price);
    formdata.append("book[published_at]", published_at);

    if (image) {
      formdata.append("book[image]", image);
    }

    try {
      const response = await fetch('http://192.168.1.11:3000/api/v1/books', {
        method: 'POST',
        body: formdata,
      });

      if (!response.ok) {
        throw new Error('Failed to add book');
      }

      const newBook = await response.json();
      addNewBook(newBook);
      await fetchBooks()
    } catch (error) {
      console.error('Error adding book:', error);
      setError(error.message);
    }
  };

  const addNewBook = book => {
    setBooks(prevBooks => [...prevBooks, book]);
  };

  const handleEdit = bookId => {
    setEditModes(prevState => ({
      ...prevState,
      [bookId]: true
    }));
  };

  const handleSubmit = (book) => {
    setEditModes(prevState => ({
      ...prevState,
      [book.id]: false
    }));
    handleUpdate(book);
  };

  const handleBackButtonClick = (book) => {
    const originalBook = originalBooks[book.id];
    console.log(originalBook);
    setBooks((prevBooks) =>
      prevBooks.map((b) => (b && b.id === book.id ? originalBook : b))
    );
    setEditModes((prevModes) => ({
      ...prevModes,
      [book.id]: false,
    }));
  };

  const handleDelete = async id => {
    const confirmed = window.confirm("Are you sure you want to delete this book?");
    if (confirmed) {
      try {
        const response = await fetch(`http://192.168.1.11:3000/api/v1/books/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.ok) {
          deleteBook(id);
          console.log('Item was deleted!');
        } else {
          throw new Error('Failed to delete book');
        }
      } catch (error) {
        console.error('Error deleting book:', error);
        setError(error.message);
      }
    }
  };

  const deleteBook = id => {
    setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
  };

  const handleUpdate = async book => {
    fetch(`http://192.168.1.11:3000/api/v1/books/${book.id}`, {
      method: 'PUT',
      body: JSON.stringify({ book: book }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(updatedBook => {
      updateBook(updatedBook);
    });
  };

  const updateBook = updatedBook => {
    setBooks(prevBooks =>
      prevBooks.map(book => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const handleImageChange = async (e, book) => {
    try {
      const file = e.target.files[0];
      console.log("Selected file:", file);
      setImage(file);
      const formdata = new FormData();
      formdata.append("book[image]", file);
      const response = await fetch(`http://192.168.1.11:3000/api/v1/books/${book.id}`, {
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

  const handleChange = (e, book) => {
    const { name, value } = e.target;
    const updatedBook = { ...book, [name]: value };
    setBooks(prevState =>
      prevState.map(b => (b.id === book.id ? updatedBook : b))
    );
  };

  const handleToggleStatus = async (id) => {
    try {
      const response = await fetch(`http://192.168.1.11:3000/api/v1/books/${id}/update_status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const updatedBook = await response.json();
        const updatedBooks = books.map(book => {
          if (book.id === id) {
            return updatedBook;
          }
          return book;
        });
        setBooks(updatedBooks);
      } else {
        throw new Error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch('http://192.168.1.11:3000/api/v1/books?title=' + searchQuery.title + '&description=' + searchQuery.description + '&published_at=' + searchQuery.published_at + '&published_status=' + searchQuery.published_status);
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
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
    setSearchQuery({
      title: '',
      description: '',
      published_at: '',
      published_status: ''
    });
    fetchBooks();
  };

  const handleImageDelete = async (bookId) => {
    try {
      const response = await fetch(`http://192.168.1.11:3000/api/v1/books/${bookId}/image_destroy`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        console.log('Image deleted successfully!');
        updateBookImage(bookId, null);
      } else {
        throw new Error('Failed to delete image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      setError(error.message);
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
        <button type="button" className='cancelButton' onClick={handleCancelSearch}>Cancel</button> {/* Add Cancel button */}
      </form>
      <table className="salers-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Published_Stattus</th>
            <th>Published_at</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Changed status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(books) && books.map((book) => (
            book && (
              <tr key={book.id}>
                <td>
                  {editModes[book.id] ? (
                    <input
                      name="title"
                      value={book.title}
                      onChange={e => handleChange(e, book)}
                      placeholder="Title"
                    />
                  ) : (
                    book.title
                  )}
                </td>
                <td>
                  {editModes[book.id] ? (
                    <input
                      name="author"
                      value={book.author}
                      onChange={e => handleChange(e, book)}
                      placeholder="Author"
                    />
                  ) : (
                    book.author
                  )}
                </td>
                <td>
                  {editModes[book.id] ? (
                    <input
                      name="description"
                      value={book.description}
                      onChange={e => handleChange(e, book)}
                      placeholder="Description"
                    />
                  ) : (
                    book.description
                  )}
                </td>
                <td>
                  {editModes[book.id] ? (
                    <input
                      name="price"
                      value={book.price}
                      onChange={e => handleChange(e, book)}
                      placeholder="Price"
                    />
                  ) : (
                    book.price
                  )}
                </td>
                <td>
                  {editModes[book.id] ? (
                    <input
                      type="file"
                      onChange={e => handleImageChange(e, book)}
                      name="image"
                    />
                  ) : (
                    <>
                      <img src={book.image_url} alt="saler's image" style={{ width: '100px', height: '100px' }} />
                      <div>
                        <RiDeleteBin5Line onClick={() => handleImageDelete(book.id)} />
                      </div>
                    </>
                  )}
                </td>
                <td>
                  {editModes[book.id] ? (
                    <input
                      name="published_status"
                      value={book.published_status}
                      onChange={e => handleChange(e, book)}
                      placeholder="Published_Status"
                    />
                  ) : (
                    book.published_status
                  )}
                </td>
                <td>
                  {editModes[book.id] ? (
                    <input
                      name="published_at"
                      value={book.published_at}
                      onChange={e => handleChange(e, book)}
                      placeholder="Published_at"
                    />
                  ) : (
                    book.published_at
                  )}
                </td>
                <td>
                  <button onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
                <td>
                  {editModes[book.id] ? (
                    <div>
                      <button onClick={() => handleSubmit(book)}>Submit</button>
                      <button onClick={() => handleBackButtonClick(book)}>Back</button>
                    </div>
                  ) : (
                    <button onClick={() => handleEdit(book.id)}>Edit</button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleToggleStatus(book.id)}>
                    Change Status
                  </button>
                </td>
              </tr>
            )
          ))}
        </tbody>
      </table>
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
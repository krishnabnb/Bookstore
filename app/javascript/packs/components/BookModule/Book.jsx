  import React, { useState, useEffect } from 'react';
  import '../SellerModule/saler.css';
  import { NewBook } from './NewBook';

  export const Book = () => {
    const [books, setBooks] = useState(() => {
      const savedBooks = localStorage.getItem('books');
      return savedBooks ? JSON.parse(savedBooks) : [];
    });
    const [error, setError] = useState(null);
    const [editModes, setEditModes] = useState({});
    const [originalBooks, setOriginalBooks] = useState({});
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
        setBooks(data);
        setOriginalBooks(data.reduce((acc, book) => {
          acc[book.id] = { ...book };
          return acc;
        }, {}));
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      }
    };

    const handleFormSubmit = (title, author, description, price, published_at) => {
      const body = JSON.stringify({ book: { title, author, description, price, published_at } })
      fetch('http://192.168.1.11:3000/api/v1/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
      })
      .then(response => response.json())
      .then(book => {
        addNewBook(book);
      });
    };

    const addNewBook = book => {
      setBooks(prevBooks => [...prevBooks, book]);
    };

    const handleEdit = bookId => {
      setEditModes(prevModes => ({
        ...prevModes,
        [bookId]: true
      }));
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };


    const handleSubmit = async book => {
      try {
        const response = await fetch(`http://192.168.1.11:3000/api/v1/books/${book.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ book })
        });
        if (response.ok) {
          const updatedBook = await response.json();
          updateBook(updatedBook);
        } else {
          throw new Error('Failed to update book');
        }
      } catch (error) {
        console.error('Error updating book:', error);
        setError(error.message);
      }
    };

    const updateBook = updatedBook => {
      setBooks(prevBooks =>
        prevBooks.map(book => (book.id === updatedBook.id ? updatedBook : book))
      );
      setEditModes(prevModes => ({
        ...prevModes,
        [updatedBook.id]: false
      }));
    };

    const handleBackButtonClick = book => {
      const originalBook = originalBooks[book.id];
      setBooks(prevBooks =>
        prevBooks.map(b => (b.id === book.id ? originalBook : b))
      );
      setEditModes(prevModes => ({
        ...prevModes,
        [book.id]: false
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

    const handleChange = (e, book) => {
      const { name, value } = e.target;
      const updatedBook = { ...book, [name]: value };
      setBooks(prevBooks =>
        prevBooks.map(b => (b.id === book.id ? updatedBook : b))
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

    const uploader = async (e) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
    
      try {
        const response = await fetch('http://192.168.1.11:3000/api/v1/books', {
          method: 'POST',
          body: body,
        });
        if (response.ok) {
          console.log('Image uploaded successfully');
        } else {
          throw new Error('Failed to upload image');
        }
      } catch (error) {
        console.error('Error uploading image:', error);
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

        <table className="salers-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Price</th>
              <th>Published_Stattus</th>
              <th>Published_at</th>
              <th>Book Image</th>
              <th>Delete</th>
              <th>Edit</th>
              <th>Changed status</th>
            </tr>
          </thead>
          <tbody>
            {books.slice().reverse().map(book => (
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
                  {editModes[book.id] ? (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setImage(e.target.files[0]); 
                        uploader(e);
                      }}
                      placeholder="Upload Image"
                    />
                  ) : (
                    <img src={book.image} alt={book.title} /> 
                  )}
                </td>
                <td>
                  <button onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
                <td>
                  {editModes[book.id] ? (
                    <div>
                      <button onClick={() => handleSubmit(book)}>Submit</button>
                      <button onClick={() => handleBackButtonClick(book)}>Cancel</button>
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

import React, { useState, useEffect } from 'react';
import './cart.css';

export const NewCart = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const formFields = {};

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://192.168.1.11:3000/api/v1/books');
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
      } else {
        throw new Error('Failed to fetch books');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const customer_id = formFields.customer_id.value;
    const book_id = formFields.book_id.value;
    const quantity = formFields.quantity.value;

    props.handleFormSubmit(customer_id, book_id, quantity);
    e.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="customer_id"
        ref={(input) => formFields.customer_id = input}
        placeholder="Enter the name"
        className='input-withcart'
        value={sessionStorage.getItem('customername')} // Set initial value to customer name from session storage
      />
      <input
        type="text"
        id="quantity"
        ref={(input) => formFields.quantity = input}
        placeholder="Enter the quantity"
        className='input-withcart'
      />
      <button type="submit" className='submit_Button'>Submit</button>
    </form>
  );
};

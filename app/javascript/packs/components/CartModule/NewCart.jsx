import React, { useState, useEffect } from 'react';
import './cart.css';

export const NewCart = (props) => {
  const [customers, setCustomers] = useState([]);
  const [books, setBooks] = useState([]);
  const formFields = {};

  useEffect(() => {
    fetchCustomers();
    fetchBooks();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await fetch('http://192.168.1.3:3000/api/v1/customers');
      if (response.ok) {
        const data = await response.json();
        setCustomers(data);
      } else {
        throw new Error('Failed to fetch customers');
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://192.168.1.3:3000/api/v1/books');
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
    const customer_firstname = formFields.customer_id.value;
    const book_id = formFields.book_id.value;
    const quantity = formFields.quantity.value;

    props.handleFormSubmit(customer_firstname, book_id, quantity);
    e.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <select id="customer_id" ref={(input) => formFields.customer_id = input} className='input-cart'>
        <option value="">Select Customer</option>
        {customers.map(customer => (
          <option key={customer.id} value={customer.id}>{customer.firstname}</option>
        ))}
      </select>
      <select id="book_id" ref={(input) => formFields.book_id = input} className='input-cart'>
        <option value="">Select Book</option>
        {books.map(book => (
          <option key={book.id} value={book.id}>{book.title}</option>
        ))}
      </select>
      <input type="text" id="quantity" ref={(input) => formFields.quantity = input} placeholder="Enter the quantity" className='input-withcart' />
      <div>
        <button type="submit" className='submit_Button'>Submit</button>
      </div>
    </form>
  );
};

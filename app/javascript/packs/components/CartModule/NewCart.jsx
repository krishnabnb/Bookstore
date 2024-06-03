// import React, { useState, useEffect } from 'react';
// import './cart.css';
// import { useParams } from 'react-router-dom';

// export const NewCart = (props) => {
//   const { quntity } = useParams();

//   const formFields = {};
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     const customer_id = formFields.customer_id.value;
//     const book_id = formFields.book_id.value;
//     const quntity = formFields.quntity.value;

//     props.handleFormSubmit(customer_id, book_id, quntity);
//     e.target.reset();
//   };

//   return (
//     <form onSubmit={handleFormSubmit}>
//       <input
//         type="text"
//         id="customer_id"
//         ref={(input) => formFields.customer_id = input}
//         placeholder="Enter the name"
//         className='input-withcart'
//       />
//        <input
//         type="text"
//         id="book_id"
//         ref={(input) => formFields.book_id = input}
//         placeholder="Enter the quantity"
//         className='input-withcart'
//       />
//       <input
//         type="text"
//         id="quantity"
//         ref={(input) => formFields.quntity = input}
//         placeholder="Enter the quantity"
//         className='input-withcart'
//       />
//       <button type="submit" className='submit_Button'>Submit</button>
//     </form>
//   );
// };


import React from 'react';
import './cart.css';
import { useParams } from 'react-router-dom';

export const NewCart = (props) => {
  const { quantity } = useParams(); 

  const formFields = {};
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
      />
      <input
        type="text"
        id="book_id"
        ref={(input) => formFields.book_id = input}
        placeholder="Enter the book ID"
        className='input-withcart'
      />
      <input
        type="text"
        id="quantity"
        ref={(input) => formFields.quantity = input}
        placeholder="Enter the quantity"
        className='input-withcart'
        defaultValue={quantity} 
      />
      <button type="submit" className='submit_Button'>Submit</button>
    </form>
  );
};

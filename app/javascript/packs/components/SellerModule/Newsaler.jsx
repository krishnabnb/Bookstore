import React, { useState } from 'react';
import './saler.css';

// export const Newsaler = (props) => {
//   let formFields = {};

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       const name = formFields.name.value;
//       const email = formFields.email.value;
//       const bookTitle = formFields.bookTitle.value;
//       const price = formFields.price.value;

//       props.handleFormSubmit(name, email, bookTitle, price);
//       e.target.reset();
//     }}>
//       <div>
//         <input type="text" id="name" ref={(input) => formFields.name = input} placeholder="Enter the name" className='input-bio' />
//       </div>
//       <div>
//         <input type="email" id="email" ref={(input) => formFields.email = input} placeholder="Enter the email" className='input-bio' />
//       </div>
//       <div>
//         <input type="text" id="bookTitle" ref={(input) => formFields.bookTitle = input} placeholder="Enter the book title" className='input-bio' />
//       </div>
//       <div>
//         <input type="text" id="price" ref={(input) => formFields.price = input} placeholder="Enter the price" className='input-bio' />
//       </div>

//       <button type="submit" className='submitButton'>Submit</button>
//     </form>
//   );
// };

export const Newsaler = (props) => {
  let formFields = {};
  let fileInputRef = React.createRef();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    formFields.image = file;
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const name = formFields.name.value;
      const email = formFields.email.value;
      const bookTitle = formFields.bookTitle.value;
      const price = formFields.price.value;
      const image = formFields.image;

      props.handleFormSubmit(name, email, bookTitle, price, image);
      e.target.reset();
      fileInputRef.current.value = ""; // Reset file input
    }}>
      <div>
        <input type="text" id="name" ref={(input) => formFields.name = input} placeholder="Enter the name" className='input-bio' />
      </div>
      <div>
        <input type="email" id="email" ref={(input) => formFields.email = input} placeholder="Enter the email" className='input-bio' />
      </div>
      <div>
        <input type="text" id="bookTitle" ref={(input) => formFields.bookTitle = input} placeholder="Enter the book title" className='input-bio' />
      </div>
      <div>
        <input type="text" id="price" ref={(input) => formFields.price = input} placeholder="Enter the price" className='input-bio' />
      </div>
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
      </div>

      <button type="submit" className='submitButton'>Submit</button>
    </form>
  );
};

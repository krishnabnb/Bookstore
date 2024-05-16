import React, { useState } from 'react';
import './saler.css';

export const Newsaler = (props) => {
  let formFields = {};
  const [file, setFile] = useState(null);
  console.log(file);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const name = formFields.name.value;
      const email = formFields.email.value;
      const bookTitle = formFields.bookTitle.value;
      const price = formFields.price.value;
      console.log(formFields)
      const image = formFields.image.files[0];

      props.handleFormSubmit(name, email, bookTitle, price, file);
      e.target.reset();
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
        <input type="file" id='image' onChange={(e)=> setFile(e.target.files[0])} ref={(input) => formFields.image = input } placeholder='choose image'/>
      </div>

      <button type="submit" className='submitButton'>Submit</button>
    </form>
  );
};

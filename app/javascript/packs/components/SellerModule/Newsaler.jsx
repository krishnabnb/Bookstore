import React, { useState } from 'react';
import './saler.css';

export const Newsaler = (props) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  let formFields = {};

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const name = formFields.name.value;
      const email = formFields.email.value;
      const bookTitle = formFields.bookTitle.value;
      const price = formFields.price.value;
      const image = formFields.image.files[0];

      props.handleFormSubmit(name, email, bookTitle, price, image);
      e.target.reset();
      setImagePreviewUrl(null);
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
        <input type="file" id="image" ref={(input) => formFields.image = input} className='input-bio' accept="image/*" onChange={(e) => {
          const selectedImage = e.target.files[0];
          const imageUrl = URL.createObjectURL(selectedImage);
          setImagePreviewUrl(imageUrl);
        }} />
        {imagePreviewUrl && <img src={imagePreviewUrl} alt="Selected Image" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
      </div>
      <button type="submit" className='submitButton'>Submit</button>
    </form>
  );
};

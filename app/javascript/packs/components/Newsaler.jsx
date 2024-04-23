import React, { useState } from 'react';

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
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={(input) => formFields.name = input} placeholder="Enter the name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={(input) => formFields.email = input} placeholder="Enter the email" />
      </div>
      <div>
        <label htmlFor="bookTitle">Book Title:</label>
        <input type="text" id="bookTitle" ref={(input) => formFields.bookTitle = input} placeholder="Enter the book title" />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" ref={(input) => formFields.price = input} placeholder="Enter the price" />
      </div>
      <div>
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" ref={(input) => formFields.image = input} accept="image/*" onChange={(e) => {
          const selectedImage = e.target.files[0];
          const imageUrl = URL.createObjectURL(selectedImage);
          setImagePreviewUrl(imageUrl);
        }} />
        {imagePreviewUrl && <img src={imagePreviewUrl} alt="Selected Image" style={{ maxWidth: '100px', maxHeight: '100px' }} />}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

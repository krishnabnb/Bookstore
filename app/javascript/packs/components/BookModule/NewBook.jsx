import React, { useRef, useState } from 'react';

export const NewBook = ({ handleFormSubmit }) => {
  const formFields = {};
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = formFields.title.value;
    const author = formFields.author.value;
    const description = formFields.description.value;
    const price = formFields.price.value;
    const published_at = formFields.published_at.value;

    handleFormSubmit(title, author, description, price, published_at, image);
    e.target.reset();
    fileInputRef.current.value = ''; 
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" id="title" ref={(input) => formFields.title = input} placeholder="Enter the title" className='input-bio' required />
      </div>
      <div>
        <input type="text" id="author" ref={(input) => formFields.author = input} placeholder="Enter the author" className='input-bio' required />
      </div>
      <div>
        <input type="text" id="description" ref={(input) => formFields.description = input} placeholder="Enter the book description" className='input-bio' required />
      </div>
      <div>
        <input type="text" id="price" ref={(input) => formFields.price = input} placeholder="Enter the price" className='input-bio' required />
      </div>
      <div>
        <input type="date" id="published_at" ref={(input) => formFields.published_at = input} placeholder="Enter the Published_at" className='text-bio-with' required />
      </div>
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} required />
      </div>

      <button type="submit" className='submitButton'>Submit</button>
    </form>
  );
};

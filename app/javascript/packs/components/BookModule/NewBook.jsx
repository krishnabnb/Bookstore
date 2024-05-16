import React, { useState } from 'react';
import '../SellerModule/saler.css';

export const NewBook = (props) => {
  let formFields = {};
  const [file, setFile] = useState(null);
  console.log('file', file)

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const title = formFields.title.value;
      const author = formFields.author.value;
      const description = formFields.description.value;
      const price = formFields.price.value;
      const published_at = formFields.published_at.value;

      props.handleFormSubmit(title, author, description, price, published_at, file);
      e.target.reset();
    }}>

      <div>
        <input type="text" id="title" ref={(input) => formFields.title = input} placeholder="Enter the title" className='input-bio' />
      </div>
      <div>
        <input type="text" id="author" ref={(input) => formFields.author = input} placeholder="Enter the author" className='input-bio' />
      </div>
      <div>
        <input type="text" id="description" ref={(input) => formFields.description = input} placeholder="Enter the book description" className='input-bio' />
      </div>
      <div>
        <input type="text" id="price" ref={(input) => formFields.price = input} placeholder="Enter the price" className='input-bio' />
      </div>
      <div>
        <input type="date" id="published_at" ref={(input) => formFields.published_at = input} placeholder="Enter the Published_at" className='text-bio-with' />
      </div>
      <div>
        <input type="file" id='image' onChange={(e)=> setFile(e.target.files[0])} ref={(input) => formFields.image = input } placeholder='choose image'/>
      </div>
      <button type="submit" className='submitButton'>Submit</button>
    </form>
  );
};


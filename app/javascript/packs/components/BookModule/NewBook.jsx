import React from 'react';
import '../SellerModule/saler.css';

export const NewBook = (props) => {
  let formFields = {};

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const title = formFields.title.value;
    const author = formFields.author.value;
    const description = formFields.description.value;
    const price = formFields.price.value;
    const release_date = formFields.release_date.value;
    const published_status = formFields.published_status.value;
    const published_at = formFields.published_at.value;


    props.handleFormSubmit(title, author, description, price, release_date, published_status, published_at);
    e.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
        <input type="date" id="release_date" ref={(input) => formFields.release_date = input} placeholder="Enter the release_date" className='text-bio-with' />
      </div>
      <div>
        <input type="text" id="price" ref={(input) => formFields.price = input} placeholder="Enter the price" className='input-bio' />
      </div>
      <div>
        <input type="text" id="published_status" ref={(input) => formFields.published_status = input} placeholder="Enter the Published_status" readOnly={true} className='input-bio' />
      </div>
      <div>
        <input type="date" id="published_at" ref={(input) => formFields.published_at = input} placeholder="Enter the Published_at" className='text-bio-with' />
      </div>
      <button type="submit" className='submitButton'>Submit</button>
    </form>
  );
};

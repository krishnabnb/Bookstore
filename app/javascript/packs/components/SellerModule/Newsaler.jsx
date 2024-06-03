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

      props.handleFormSubmit(name, email, bookTitle, price, file);
      e.target.reset();
    }}>


    </form>
  );
};

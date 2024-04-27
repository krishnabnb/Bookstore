import React from 'react'
import './contact.css';

export const Newcontact = (props) => {
  let formFields = {};

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = formFields.name.value;
    const email = formFields.email.value;
    const subject = formFields.subject.value;
    const massage = formFields.massage.value;

    props.handleFormSubmit(name, email, subject, massage);
    e.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <input type="text" id="name" ref={(input) => formFields.name = input} placeholder="Enter the name" className='input' />
      </div>
      <div>
        <input type="text" id="email" ref={(input) => formFields.email = input} placeholder="Enter the email" className='input' />
      </div>
      <div>
        <input type="text" id="subject" ref={(input) => formFields.subject = input} placeholder="Enter the subject" className='input' />
      </div>
      <div>
        <input type="text" id="massage" ref={(input) => formFields.massage = input} placeholder="Enter the massage" className='input' />
      </div>
      <button type="submit" className='Button'>Submit</button>
    </form>
  );
};

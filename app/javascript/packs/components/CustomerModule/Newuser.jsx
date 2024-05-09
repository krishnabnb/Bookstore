import React from 'react'
import '../SellerModule/saler.css';

export const Newuser = (props) => {
  let formFields = {};

  const handleFormSubmit = (e) => {
    // e.preventDefault();
    // const firstname = formFields.firstname.value;
    // const lastname = formFields.lastname.value;
    // const address = formFields.address.value;
    // const city = formFields.city.value;
    // const contactno = formFields.contactno.value;

    // props.handleFormSubmit(firstname, lastname, address, city, contactno);
    // e.target.reset();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* <div>
        <input type="text" id="firstname" ref={(input) => formFields.firstname = input} placeholder="Enter the FirstName" className='input-bio' />
      </div>
      <div>
        <input type="text" id="lastname" ref={(input) => formFields.lastname = input} placeholder="Enter the LastName" className='input-bio' />
      </div>
      <div>
        <input type="text" id="address" ref={(input) => formFields.address = input} placeholder="Enter the Address" className='input-bio' />
      </div>
      <div>
        <input type="text" id="city" ref={(input) => formFields.city = input} placeholder="Enter the City" className='input-bio' />
      </div>
      <div>
        <input type="number" id="contactno" ref={(input) => formFields.contactno = input} placeholder="Enter the contactNo" className='input-bio' />
      </div> */}
      {/* <button type="submit" className='submitButton'>Submit</button> */}
    </form>
  )
}

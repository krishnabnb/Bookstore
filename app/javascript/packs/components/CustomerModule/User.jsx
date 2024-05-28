import React, { useState, useEffect } from 'react';
import { Newuser } from './Newuser';

export const User = () => {
  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem('customers');
    return savedCustomers ? JSON.parse(savedCustomers) : [];
  });
  const [error, setError] = useState(null);
  const [editModes, setEditModes] = useState({});
  const [originalCustomers, setOriginalCustomers] = useState({});

  useEffect(() => {
    fetch('http://192.168.1.8:3000/api/v1/customers')
    .then(response => response.json())
      .then(data => {
        setCustomers(data);
        setOriginalCustomers(data.reduce((acc, customer) => {
          acc[customer.id] = { ...customer };
          return acc;
        }, {}));
      });
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await fetch('http://192.168.1.8:3000/api/v1/customers');
      if (response.ok) {
        const data = await response.json();
        setCustomers(data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  const handleFormSubmit = (firstname, lastname, address, city, contactno) => {
    const body = JSON.stringify({ customer: { firstname, lastname, address, city, contactno } })
    fetch('http://192.168.1.8:3000/api/v1/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
    .then(response => response.json())
    .then(customer => {
      addNewCustomer(customer);
    });
  };

  const addNewCustomer = customer => {
    setCustomers(prevState => [...prevState, customer]);
  };

  const handleEdit = customerId => {
    setEditModes(prevModes => ({
      ...prevModes,
      [customerId]: true
    }));
  };

  const handleSubmit = customer => {
    setEditModes(prevState => ({
      ...prevState,
      [customer.id]: false
    }));
    handleupdate(customer)
  };

  const handleupdate = customer => {
    fetch(`http://192.168.1.8:3000/api/v1/customers/${customer.id}`, {
      method: 'PUT',
      body: JSON.stringify({customer: customer}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(updatedCustomer => {
      updateCusromer(updatedCustomer)
    })
  }

  const updateCusromer = updatedCustomer => {
    setCustomers(prevState =>
      prevState.map(customer => (customer.id === updatedCustomer.id ? updatedCustomer : customer))
    );
  };

  const handleBackButtonClick = customer => {
    const originalCustomer = originalCustomers[customer.id];
    setCustomers(prevState =>
      prevState.map(b => (b.id === customer.id ? originalCustomer : b))
    );
    setEditModes(prevState => ({
      ...prevState,
      [customer.id]: false
    }));
  };

  const handleDelete = async id => {
    const confirmed = window.confirm("Are you sure you want to delete this contact?");
    if (confirmed) {
      const response = await fetch(`http://192.168.1.8:3000/api/v1/customers/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        console.log('delete');
        deleteCustomer(id)
      })
    }
  };

  const deleteCustomer = id => {
    setCustomers(prevState => prevState.filter(customer => customer.id !== id));
  };

  const handleChange = (e, customer) => {
    const { name, value } = e.target;
    const updatedCustomer = { ...customer, [name]: value };
    setCustomers(prevState =>
      prevState.map(b => (b.id === customer.id ? updatedCustomer : b))
    );
  };

  return (
    <div>
      <div>
        <div>
          <div className='bio-container'>
            <div className='title-2'>
              <h1>Customers</h1>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            </div>
          </div>
        </div>
        <div className='form-field'>
          <Newuser handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <table className="salers-table">
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Address</th>
            <th>City</th>
            <th>ContactNo</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(customers) && customers?.map((customer) => (

            <tr key={customer.id}>
              <td>
                {editModes[customer.id] ? (
                  <input
                    name="firstname"
                    value={customer.firstname}
                    onChange={e => handleChange(e, customer)}
                    placeholder="Firstname"
                  />
                ) : (
                  customer.firstname
                )}
              </td>
              <td>
                {editModes[customer.id] ? (
                  <input
                    name="lastname"
                    value={customer.lastname}
                    onChange={e => handleChange(e, customer)}
                    placeholder="lastname"
                  />
                ) : (
                  customer.lastname
                )}
              </td>
              <td>
                {editModes[customer.id] ? (
                  <input
                    name="address"
                    value={customer.address}
                    onChange={e => handleChange(e, customer)}
                    placeholder="Address"
                  />
                ) : (
                  customer.address
                )}
              </td>
              <td>
                {editModes[customer.id] ? (
                  <input
                    name="city"
                    value={customer.city}
                    onChange={e => handleChange(e, customer)}
                    placeholder="City"
                  />
                ) : (
                  customer.city
                )}
              </td>
              <td>
                {editModes[customer.id] ? (
                  <input
                    name="contactno"
                    value={customer.contactno}
                    onChange={e => handleChange(e, customer)}
                    placeholder="Contactno"
                  />
                ) : (
                  customer.contactno
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(customer.id)}>Delete</button>
              </td>
              <td>
                {editModes[customer.id] ? (
                  <div>
                    <button onClick={() => handleSubmit(customer)}>Submit</button>
                    <button onClick={() => handleBackButtonClick(customer)}>Back</button>
                  </div>
                ) : (
                  <button onClick={() => handleEdit(customer.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='email'>
        <div className="left-side">
          <h2>Subscribe Now to Get Regular Updates</h2>
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
        <div className='right-side'>
          <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='img'/>
        </div>
      </div>
    </div>
  );
};

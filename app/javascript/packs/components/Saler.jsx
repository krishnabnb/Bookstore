import React, { useState, useEffect } from 'react';
import './saler.css';
import { Newsaler } from './Newsaler';

export const Saler = () => {
  const [salers, setSalers] = useState([]);
  const [editModes, setEditModes] = useState({});
  const [originalSalers, setOriginalSalers] = useState({});

  useEffect(() => {
    fetch('/api/v1/salers.json')
      .then(response => response.json())
      .then(data => {
        setSalers(data);
        setOriginalSalers(data.reduce((acc, saler) => {
          acc[saler.id] = { ...saler };
          return acc;
        }, {}));
      });
  }, []);

  const handleEdit = salerId => {
    setEditModes(prevState => ({
      ...prevState,
      [salerId]: true
    }));
  };

  const handleSubmit = saler => {
    setEditModes(prevState => ({
      ...prevState,
      [saler.id]: false
    }));
    handleUpdate(saler);
  };

  const handleFormSubmit = (name, email, book_title, price, image) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('book_title', book_title);
    formData.append('price', price);
    formData.append('image', image);

    fetch('/api/v1/salers', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(saler => {
        addNewSaler(saler);
      });
  };

  const handleDelete = id => {
    const confirmed = window.confirm("Are you sure you want to delete this saler?");
    if (confirmed) {
      fetch(`/api/v1/salers/${id}`, {
        method: 'DELETE'
      })
      .then(() => {
        console.log('Item was deleted!');
        deleteSaler(id);
      });
    }
  };

  const deleteSaler = id => {
    setSalers(prevState => prevState.filter(saler => saler.id !== id));
  };

  const addNewSaler = saler => {
    setSalers(prevState => [...prevState, saler]);
  };

  const handleUpdate = saler => {
    fetch(`/api/v1/salers/${saler.id}`, {
      method: 'PUT',
      body: JSON.stringify({ saler }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(updatedSaler => {
        updateSaler(updatedSaler);
      });
  };

  const updateSaler = updatedSaler => {
    setSalers(prevState =>
      prevState.map(saler => (saler.id === updatedSaler.id ? updatedSaler : saler))
    );
  };

  const handleChange = (e, saler) => {
    const { name, value } = e.target;
    const updatedSaler = { ...saler, [name]: value };
    setSalers(prevState =>
      prevState.map(s => (s.id === saler.id ? updatedSaler : s))
    );
  };

  const allSalers = salers.map(saler => (
    <tr key={saler.id}>
      <td>
        {editModes[saler.id] ? (
          <input
            name="name"
            value={saler.name}
            onChange={e => handleChange(e, saler)}
            placeholder="Name"
          />
        ) : (
          saler.name
        )}
      </td>
      <td>
        {editModes[saler.id] ? (
          <input
            name="email"
            value={saler.email}
            onChange={e => handleChange(e, saler)}
            placeholder="Email"
          />
        ) : (
          saler.email
        )}
      </td>
      <td>
        {editModes[saler.id] ? (
          <input
            name="book_title"
            value={saler.book_title}
            onChange={e => handleChange(e, saler)}
            placeholder="Book Title"
          />
        ) : (
          saler.book_title
        )}
      </td>
      <td>
        {editModes[saler.id] ? (
          <input
            name="price"
            value={saler.price}
            onChange={e => handleChange(e, saler)}
            placeholder="Price"
          />
        ) : (
          saler.price
        )}
      </td>
      <td>
        {saler.image && <img src={saler.image_path} alt="Saler's Image" />} 
      </td>
      <td>
        {editModes[saler.id] ? (
          <button onClick={() => handleSubmit(saler)}>Submit</button>
        ) : (
          <button onClick={() => handleEdit(saler.id)}>Edit</button>
        )}
      </td>
      <td>
        <button onClick={() => handleDelete(saler.id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <div>
        <div>
          <div className='bio-container'>
            <div className='title-2'>
              <h1>Salers</h1>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            </div>
          </div>
        </div>

        <Newsaler handleFormSubmit={handleFormSubmit} />

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Book Title</th>
              <th>Price</th>
              <th>Image</th>
              <th colSpan={2}>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{allSalers}</tbody>
        </table>
      </div>
    </div>
  );
};


import React, { useState, useEffect } from 'react';
import './saler.css';
import { Newsaler } from './Newsaler';

export const Saler = () => {
  const [salers, setSalers] = useState(() => {
    const savedSalers = localStorage.getItem('salers');
    return savedSalers ? JSON.parse(savedSalers) : [];
  });

  const [error, setError] = useState(null);
  const [editModes, setEditModes] = useState({});
  const [originalSalers, setOriginalSalers] = useState({});

  useEffect(() => {
    fetch('http://192.168.1.3:3000/api/v1/salers')
      .then(response => response.json())
      .then(data => {
        setSalers(data);
        setOriginalSalers(data.reduce((acc, saler) => {
          acc[saler.id] = { ...saler };
          return acc;
        }, {}));
      });
    fetchSalers();
  }, []);

  const fetchSalers = async () => {
    try {
      const response = await fetch('http://192.168.1.3:3000/api/v1/salers');
      if (response.ok) {
        const data = await response.json();
        setSalers(data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  const handleFormSubmit = (name, email, book_title, price, image) => {
    const body = JSON.stringify({ saler: { name, email, book_title, price, image } });
    fetch('http://192.168.1.3:3000/api/v1/salers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
    .then(response => response.json())
    .then(saler => {
      addNewSaler(saler);
    });
  };

  const addNewSaler = saler => {
    setSalers(prevState => [...prevState, saler]);
  };

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

  const handleBackButtonClick = saler => {
    const originalSaler = originalSalers[saler.id];
    setSalers(prevState =>
      prevState.map(s => (s.id === saler.id ? originalSaler : s))
    );
    setEditModes(prevState => ({
      ...prevState,
      [saler.id]: false
    }));
  };

  const handleDelete = id => {
    const confirmed = window.confirm("Are you sure you want to delete this saler?");
    if (confirmed) {
      fetch(`http://192.168.1.3:3000/api/v1/salers/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        console.log('Item was deleted!');
        deleteSaler(id)
      });
    }
  };

  const deleteSaler = id => {
    setSalers(prevState => prevState.filter(saler => saler.id !== id));
  };

  const handleUpdate = saler => {
    fetch(`http://192.168.1.3:3000/api/v1/salers/${saler.id}`, {
      method: 'PUT',
      body: JSON.stringify({ saler: saler }),
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
        <div className='form-field'>
          <Newsaler handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <table className="salers-table">
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
        <tbody>
          {salers.slice().reverse().map((saler) => (
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
                    placeholder="book_title"
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
                    placeholder="price"
                  />
                ) : (
                  saler.price
                )}
              </td>
              <td>
                {editModes[saler.id] ? (
                  <input
                    name="image_path"
                    value={saler.image}
                    onChange={e => handleChange(e, saler)}
                    placeholder="image_path"
                  />
                ) : (
                  saler.image
                )}
              </td>
              <td>
                {editModes[saler.id] ? (
                  <button onClick={() => handleSubmit(saler)}>Submit</button>
                ) : (
                  <button onClick={() => handleEdit(saler.id)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => handleBackButtonClick(saler)}>Back</button>
              </td>
              <td>
                <button onClick={() => handleDelete(saler.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

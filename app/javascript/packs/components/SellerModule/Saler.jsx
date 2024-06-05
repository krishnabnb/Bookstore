import React, { useState, useEffect } from 'react';
import './saler.css';
import { RiDeleteBin5Line } from "react-icons/ri";

export const Saler = () => {

  const [salers, setSalers] = useState([]);
  const [error, setError] = useState(null);
  const [editModes, setEditModes] = useState({});
  const [originalSalers, setOriginalSalers] = useState({});
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchSalers();
  }, []);

  const fetchSalers = async () => {
    try {
      const response = await fetch('http://192.168.1.8:3000/api/v1/salers');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      setSalers(data?.saler || []);
      setOriginalSalers(Object.fromEntries(data?.saler?.map(saler => [saler.id, saler])) || {});
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  const handleFormSubmit = async (name, email, adress ,city,phoneno, image) => {
    const formdata = new FormData();
    formdata.append("saler[name]", name);
    formdata.append("saler[email]", email);
    formdata.append("saler[adress]", adress);
    formdata.append("saler[city]", city);
    formdata.append("saler[phoneno]", phoneno);

    if(image){
      formdata.append("saler[image]", image);
    }
    try {
      const response = await fetch('http://192.168.1.8:3000/api/v1/salers', {
        method: 'POST',
        body: formdata,
      });
      if (!response.ok) {
        throw new Error('Failed to add saler');
      }
      const responseData = await response.json();
      console.log('Response data:', responseData);
      addNewSaler(responseData);
      await fetchSalers();
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message);
    }
  };

  const addNewSaler = saler => {
    setSalers(prevSalers => [...prevSalers, saler]);
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
      prevState.map((s) => (s && s.id === saler.id ? originalSaler : s))
    );
    setEditModes(prevState => ({
      ...prevState,
      [saler.id]: false
    }));
  };

  const handleDelete = id => {
    const confirmed = window.confirm("Are you sure you want to delete this saler?");
    if (confirmed) {
      fetch(`http://192.168.1.8:3000/api/v1/salers/${id}`, {
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
    fetch(`http://192.168.1.8:3000/api/v1/salers/${saler.id}`, {
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

  const handleImageChange = async(e, saler) => {
    try{
      const file = e.target.files[0];
      console.log("Selected file:", file);
      setImage(file);
      const formdata = new FormData();
      formdata.append("saler[image]", file);
      const response = await fetch(`http://192.168.1.8:3000/api/v1/salers/${saler.id}`, {
        method: 'PUT',
        body: formdata,
      });
      const updatedSaler = await response.json();
      console.log("Updated book:", updatedSaler);
      updateSaler(updatedSaler);
      await fetchSalers();
    } catch (error) {
      console.error('Error updating book image:', error);
      setError(error.message);
    }
  };

  const handleImageDelete = async (salerId) => {
    try {
      const response = await fetch(`http://192.168.1.8:3000/api/v1/salers/${salerId}/image_destroy`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        console.log('Image deleted successfully!');
        updateSalerImage(salerId, null);
      } else {
        throw new Error('Failed to delete image');
      }
    } catch (error) {
      console.error('Error deleting image:', error);
      setError(error.message);
    }
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
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>address</th>
            <th>city</th>
            <th>contactno</th>
            <th>Image</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(salers) && salers?.map((saler) => (
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
                    name="address"
                    value={saler.adress}
                    onChange={e => handleChange(e, saler)}
                    placeholder="address"
                  />
                ) : (
                  saler.price
                )}
              </td>
              <td>
                {editModes[saler.id] ? (
                  <input
                    name="City"
                    value={saler.city}
                    onChange={e => handleChange(e, saler)}
                    placeholder="city"
                  />
                ) : (
                  saler.book_title
                )}
              </td>
              <td>
                {editModes[saler.id] ? (
                  <input
                    name="phoneno"
                    value={saler.phoneno}
                    onChange={e => handleChange(e, saler)}
                    placeholder="phone_number"
                  />
                ) : (
                  saler.price
                )}
              </td>
              <td>
                {editModes[saler.id] ? (
                  <input
                    type="file"
                    onChange={e => handleImageChange(e, saler)}
                    name="image"
                  />
                ) : (
                  <>
                    <img src={saler.image_path} alt="saler's image" style={{ width: '100px', height: '100px' }} />
                    <div>
                      <RiDeleteBin5Line onClick={() => handleImageDelete(saler.id)} />
                    </div>
                  </>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(saler.id)}>Delete</button>
              </td>
              <td>
                {editModes[saler.id] ? (
                  <div>
                    <button onClick={() => handleSubmit(saler)}>Submit</button>
                    <button onClick={() => handleBackButtonClick(saler)}>Back</button>
                  </div>
                ) : (
                  <button onClick={() => handleEdit(saler.id)}>Edit</button>
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

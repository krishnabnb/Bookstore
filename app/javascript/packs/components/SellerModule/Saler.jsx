import React, { useState, useEffect } from 'react';
import './saler.css';

export const Saler = () => {

  const [salers, setSalers] = useState([]);
  const [error, setError] = useState(null);
  const [editModes, setEditModes] = useState({});
  const [originalSalers, setOriginalSalers] = useState({});
  const [image, setImage] = useState(null);

  const [salerEmail, setSalerEmail] = useState('');
  const [salername, setSalername] = useState('');
  const [saleradress, setSaleradress] = useState('');
  const [salerphoneno, setSalerphoneno] = useState('');
  const [salercity, setSalercity] = useState('');

  useEffect(()=>{
    const email = sessionStorage.getItem('salerEmail');
    const firstname = sessionStorage.getItem('salername');
    const lastname = sessionStorage.getItem('saleradress');
    const address = sessionStorage.getItem('salerphoneno');
    const city = sessionStorage.getItem('salercity');

    setSalerEmail(email);
    setSalername(firstname);
    setSaleradress(lastname);
    setSalerphoneno(address);
    setSalercity(city);
  })

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
      <div style={{ border:'1px solid #ccc', borderRadius:'20px', boxShadow:'0 2px 4px rgba(0,0,0,0.1)', height:'400px', marginTop:'100px'}}>
        <div style={{marginLeft:'400px', marginTop:'100px'}}>
          <div style={{display:'flex',marginTop:'-20px'}}>
            <h2>Full name:</h2>
            <h4 style={{marginLeft:'50px'}}>{salername}</h4>
          </div>
          <div style={{display:'flex'}}>
            <h2>Address:</h2>
            <h4 style={{marginLeft:'70px'}}>{saleradress}</h4>
          </div>
          <div style={{display:'flex'}}>
            <h2>City:</h2>
            <h4 style={{marginLeft:'120px'}}>{salercity}</h4>
          </div>
          <div style={{display:'flex'}}>
            <h2>Contactno:</h2>
            <h4 style={{marginLeft:'30px'}}>{salerphoneno}</h4>
          </div>
          <div style={{display:'flex'}}>
            <h2>Email:</h2>
            <h4 style={{marginLeft:'90px'}}>{salerEmail}</h4>
          </div>
        </div>
        <div style={{float:'right', marginTop:'-250px', marginRight:'600px'}}>
          <img src='data:image/jpeg;base64,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' style={{height:'300px', width:'300px'}}></img>
        </div>
      </div>
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

import React, { useState, useEffect } from 'react';

export const User = () => {
  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem('customers');
    return savedCustomers ? JSON.parse(savedCustomers) : [];
  });
  const [error, setError] = useState(null);
  const [editModes, setEditModes] = useState({});
  const [originalCustomers, setOriginalCustomers] = useState({});
  const [customerEmail, setCustomerEmail] = useState('');
  const [customername, setCustomerFirstname] = useState('');
  const [customerLastName, setCustomerLastName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [ContactNo, setCustomerContactNo] = useState('');
  const [paymentInfo, setPaymentInfo] = useState({
    totalPrice: 0,
    paymentMethod: ''
  });

  useEffect(() => {
    const getUrlParams = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const totalPrice = parseFloat(searchParams.get('totalPrice')) || 0;
      const paymentMethod = searchParams.get('paymentMethod') || '';
      return { totalPrice, paymentMethod };
    };
    setPaymentInfo(getUrlParams());
  }, []);

  useEffect(()=>{
    const email = sessionStorage.getItem('customerEmail');
    const firstname = sessionStorage.getItem('customername');
    const lastname = sessionStorage.getItem('customerLastName');
    const address = sessionStorage.getItem('customerAddress');
    const city = sessionStorage.getItem('customerCity');
    const contactno = sessionStorage.getItem('ContactNo');

    setCustomerEmail(email);
    setCustomerFirstname(firstname);
    setCustomerLastName(lastname);
    setCustomerAddress(address);
    setCustomerCity(city);
    setCustomerContactNo(contactno);
  })

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

  const handleEdit = customerId => {
    setEditModes(prevModes => ({
      ...prevModes,
      [customerId]: true
    }));
  };

  const handleSubmit = (customer) => {
    setEditModes(prevState => ({
      ...prevState,
      [customer.id]: false
    }));
    handleupdate(customer)
  };

  // const handleupdate = customer => {
  //   fetch(`http://192.168.1.8:3000/api/v1/customers/${customer.id}`, {
  //     method: 'PUT',
  //     body: JSON.stringify({customer: customer}),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(updatedCustomer => {
  //     updateCusromer(updatedCustomer)
  //   })
  // }

  const handleupdate = async customer => {
    fetch(`http://192.168.1.8:3000/api/v1/customers/${customer.id}`, {
      method: 'PUT',
      body: JSON.stringify({customer: customer}), // Fix the payload structure
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
    setCustomers(prevSfirstnametate => prevState.filter(customer => customer.id !== id));
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
      </div>
      <div style={{ border:'1px solid #ccc', borderRadius:'20px', boxShadow:'0 2px 4px rgba(0,0,0,0.1)', height:'400px', marginTop:'100px'}}>
        <div style={{marginLeft:'400px', marginTop:'50px'}}>
          <div style={{display:'flex',marginTop:'-10px'}}>
            <h2>Firstname:</h2>
            <h4 style={{marginLeft:'50px', marginTop:'25px'}}>{customername}</h4>
          </div>
          <div style={{display:'flex',marginTop:'-20px'}}>
            <h2>Lastname:</h2>
            <h4 style={{marginLeft:'50px', marginTop:'25px'}}>{customerLastName}</h4>
          </div>
          <div style={{display:'flex',marginTop:'-20px'}}>
            <h2>Address:</h2>
            <h4 style={{marginLeft:'70px', marginTop:'25px'}}>{customerAddress}</h4>
          </div>
          <div style={{display:'flex',marginTop:'-20px'}}>
            <h2>City:</h2>
            <h4 style={{marginLeft:'120px', marginTop:'25px'}}>{customerCity}</h4>
          </div>
          <div style={{display:'flex',marginTop:'-20px'}}>
            <h2>Contactno:</h2>
            <h4 style={{marginLeft:'30px', marginTop:'25px'}}>{ContactNo}</h4>
          </div>
          <div style={{display:'flex',marginTop:'-20px'}}>
            <h2>Email:</h2>
            <h4 style={{marginLeft:'90px', marginTop:'25px'}}>{customerEmail}</h4>
          </div>
        </div>
        <div style={{float:'right', marginTop:'-300px', marginRight:'600px' }}>
          <img src='data:image/jpeg;base64,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' style={{height:'300px', width:'300px'}}></img>
        </div>
        <div>
      <h1>Customer Page</h1>
      <h2>Payment Information</h2>
      <p>Total Price: ${paymentInfo.totalPrice.toFixed(2)}</p>
      <p>Payment Method: {paymentInfo.paymentMethod}</p>
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

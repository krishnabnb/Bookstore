import React, { useState, useEffect } from 'react';
import { NewPayment } from './NewPayment';
import { useParams } from 'react-router-dom';


export const Payment = () => {
  let { cartId } = useParams();

  const [payments, setPayments] = useState(() => {
    const savedPayments = localStorage.getItem('payments');
    return savedPayments ? JSON.parse(savedPayments) : [];
  });

  const [carts, setCarts] = useState([]);
  const [error, setError] = useState(null);
  const [editModes, setEditModes] = useState({});
  const [originalPayments, setOriginalPayments] = useState({});
  const [selectedMathod, setSelectedMathod] = useState("");

  useEffect(() => {
    fetchCarts();
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await fetch('http://192.168.1.3:3000/api/v1/payments');
      if (response.ok) {
        const data = await response.json();
        setPayments(data);
        setOriginalPayments(data.reduce((acc, payment) => {
          acc[payment.id] = { ...payment };
          return acc;
        }, {}));
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  const fetchCarts = async () => {
    try {
      const response = await fetch('http://192.168.1.3:3000/api/v1/carts');
      if (response.ok) {
        const data = await response.json();
        setCarts(data);
      } else {
        throw new Error('Failed to fetch books');
      }
    } catch (error) {
      console.error('Error fetching books:', error);
      setError(error.message);
    }
  };

  const handleFormSubmit = (mathod, cart_id) => {
    const body = JSON.stringify({ payment: {mathod, cart_id} })
    fetch('http://192.168.1.3:3000/api/v1/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
    .then(response => response.json())
    .then(payment => {
      addNewPayment(payment);
    });
  };

  const addNewPayment = payment => {
    setPayments(prevState => [...prevState, payment]);
  };

  const handleEdit = paymentId => {
    setEditModes(prevModes => ({
      ...prevModes,
      [paymentId]: true
    }));
  };

  const handleSubmit = payment => {
    setEditModes(prevState => ({
      ...prevState,
      [payment.id]: false
    }));
    handleUpdate(payment);
  };

  const handleUpdate = payment => {
    fetch(`http://192.168.1.3:3000/api/v1/payments/${payment.id}`, {
      method: 'PUT',
      body: JSON.stringify({payment: payment}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(updatedPayment => {
      updatePayment(updatedPayment);
    });
  };

  const updatePayment = updatedPayment => {
    setPayments(prevState =>
      prevState.map(p => (p.id === updatedPayment.id ? updatedPayment : p))
    );
  };

  const handleBackButtonClick = payment => {
    const originalPayment = originalPayments[payment.id];
    setPayments(prevState =>
      prevState.map(p => (p.id === payment.id ? originalPayment : p))
    );
    setEditModes(prevState => ({
      ...prevState,
      [payment.id]: false
    }));
  };

  const handleDelete = async id => {
    const confirmed = window.confirm("Are you sure you want to delete this contact?");
    if (confirmed) {
      try {
        await fetch(`http://192.168.1.3:3000/api/v1/payments/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        deletePayment(id);
      } catch (error) {
        console.error('Error deleting payment:', error);
        setError('Failed to delete payment. Please try again later.');
      }
    }
  };

  const deletePayment = id => {
    setPayments(prevState => prevState.filter(payment => payment.id !== id));
  };

  const handleChange = (e, payment) => {
    const { name, value } = e.target;
    const updatedPayment = { ...payment, [name]: value };
    setPayments(prevState =>
      prevState.map(p => (p.id === payment.id ? updatedPayment : p))
    );
  };

  const handleMathodChange = (mathod) => {
    setSelectedMathod(mathod);
  };

  return (
    <div>
      <div>
        <div>
          <div className='bio-container'>
            <div className='title-2'>
              <h1>Payments</h1>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            </div>
          </div>
        </div>
        <div className='form-field'>
          <NewPayment handleFormSubmit={handleFormSubmit} handleMathodChange={handleMathodChange} />
        </div>
      </div>
      <table className="salers-table">
        <thead>
          <tr>
            <th>Total Amount</th>
            <th>Date</th>
            <th>Type</th>
            <th>Cart</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {payments.slice().reverse().map(payment => (
            <tr key={payment.id}>
              <td>
                {editModes[payment.id] ? (
                  <input
                    name="amount"
                    value={payment.amount}
                    onChange={e => handleChange(e, payment)}
                    placeholder="Amount"
                  />
                ) : (
                  payment.amount
                )}
              </td>
              <td>
                {editModes[payment.id] ? (
                  <input
                    name="date"
                    value={payment.date}
                    onChange={e => handleChange(e, payment)}
                    placeholder="Date"
                  />
                ) : (
                  payment.date
                )}
              </td>
              <td>
                {editModes[payment.id] ? (
                  <input
                    name="mathod"
                    value={payment.mathod}
                    onChange={e => handleChange(e, payment)}
                    placeholder="Mathod"
                  />
                ) : (
                  payment.mathod
                )}
              </td>
              <td>
                {editModes[payment.id] ? (
                  <select
                    name="cart_id"
                    value={payment.cart_id}
                    onChange={e => handleChange(e, payment)}
                    placeholder="Select Payment"
                  >
                    {carts.map(cart => (
                      <option key={cart.id} value={cart.id}>
                        {cart.id}
                      </option>
                    ))}
                  </select>
                ) : (
                  payment.cart_id
                )}
              </td>

              <td>
                <button onClick={() => handleDelete(payment.id)}>Delete</button>
              </td>
              <td>
                {editModes[payment.id] ? (
                  <div>
                    <button onClick={() => handleSubmit(payment)}>Submit</button>
                    <button onClick={() => handleBackButtonClick(payment)}>Back</button>
                  </div>
                ) : (
                  <button onClick={() => handleEdit(payment.id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {error && <div className="error-message">{error}</div>}
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


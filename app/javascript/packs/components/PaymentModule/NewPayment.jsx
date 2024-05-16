import React, { useState, useEffect } from 'react';
import '../CartModule/cart.css';
import { useParams } from 'react-router-dom';

export const NewPayment = (props) => {

  const { cartId } = useParams();
  const [carts, setCarts] = useState([]);
  const [method, setMethod] = useState('');
  const [selectedCartId, setSelectedCartId] = useState(cartId);
  const formFields = {};
  const [error, setError] = useState(null);
  const [payments, setPayments] = useState(() => {
    const savedPayments = localStorage.getItem('payments');
    return savedPayments ? JSON.parse(savedPayments) : [];
  });

  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCarts = async () => {
    try {
      const response = await fetch('http://192.168.1.3:3000/api/v1/carts');
      if (response.ok) {
        const data = await response.json();
        setCarts(data);
      } else {
        throw new Error('Failed to fetch carts');
      }
    } catch (error) {
      console.error('Error fetching carts:', error);
      setError('Failed to fetch carts. Please try again later.');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const cartId = selectedCartId;

    if (!cartId) {
      setError('Please select a cart.');
      return;
    }

    props.handleFormSubmit(method, cartId);
    e.target.reset();
    setError(null);
  };

  const handleMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setMethod(selectedMethod);
    props.handleMethodChange(selectedMethod);
  };

  const handleCartIdChange = (e) => {
    setSelectedCartId(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <select
        id="method"
        value={method}
        onChange={handleMethodChange}
        className="input-cart"
      >
        <option value="">Select method</option>
        <option value="cash">Cash</option>
        <option value="online_payment">Online Payment</option>
      </select>

      <input
        type="text"
        id="cart_id"
        placeholder="Enter the cart_id"
        className="input-cart"
        value={selectedCartId}
        onChange={handleCartIdChange}
      />

      {error && <div className="error-message">{error}</div>}
      <div>
        <button type="submit" className="submit_Button" disabled={!selectedCartId}>
          Submit
        </button>
      </div>
    </form>
  );
};

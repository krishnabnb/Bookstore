import React, { useState, useEffect } from 'react';
import '../CartModule/cart.css';

export const NewPayment = (props) => {
  const [carts, setCarts] = useState([]);
  const [mathod, setMathod] = useState('');
  const formFields = {};
  const [error, setError] = useState(null);

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
    const amount = formFields.amount.value;
    const date = formFields.date.value;
    const cart_id = formFields.cart_id.value;

    props.handleFormSubmit(amount, date, mathod, cart_id);
    e.target.reset();
  };

  const handleMathodChange = (e) => {
    const selectedMathod = e.target.value;
    setMathod(selectedMathod);
    props.handleMathodChange(selectedMathod);
  };

  const currentDate = new Date().toISOString().split('T')[0];


  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        id="amount"
        ref={(input) => (formFields.amount = input)}
        placeholder="Enter the amount"
        readOnly={true}
        className="input-withcart"
      />
      <input
        type="date"
        id="date"
        ref={(input) => (formFields.date = input)}
        placeholder="Enter the date"
        className="input-withcart"
        defaultValue={currentDate}
      />

      <select
        id="mathod"
        value={mathod}
        onChange={handleMathodChange}
        className="input-cart"
      >
        <option value="">Select mathod</option>
        <option value="cash">Cash</option>
        <option value="online_payment">Online Payment</option>
      </select>

      <select
        id="cart_id"
        ref={(input) => (formFields.cart_id = input)}
        className="input-cart"
      >
        <option value="">Select cart</option>
        {carts.map((cart) => (
          <option key={cart.id} value={cart.id}>
            {cart.id}
          </option>
        ))}
      </select>
      {error && <div className="error-message">{error}</div>}
      <div>
        <button type="submit" className="submit_Button">Submit
        </button>
      </div>
    </form>
  );
};

import React, { useState, useEffect } from 'react';
import '../SellerModule/saler.css';
import toastr from 'toastr';
import 'toastr/build/toastr.css';

export const Cart = () => {
  const [carts,setcart] = useState([]);
  const [error, setError] = useState(null);
  const [originalcarts, setOriginalCarts] = useState({});

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://192.168.1.8:3000/api/v1/carts');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setcart(data?.cart || []);
      setOriginalCarts(Object.fromEntries(data?.cart?.map(cart => [cart.id, cart])) || {});
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };


  return (
    <div>Cart</div>
  )
}

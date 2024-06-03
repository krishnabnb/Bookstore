import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <li>
      <img src={item.image_url} alt="Book Cover" />
      <div>
        <h3>Title: {item.title}</h3>
        <p>Author: {item.author}</p>
        <p>Price: {item.price}</p>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;

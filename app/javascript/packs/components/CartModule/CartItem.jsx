import React from 'react';

const CartItem = ({ book }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.description}</td>
      <td>{book.price}</td>
      <td>{book.quantity}</td>
    </tr>
  );
};

export default CartItem;

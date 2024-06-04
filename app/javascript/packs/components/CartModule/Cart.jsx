import React, { useState, useEffect } from 'react';
import { NewCart } from './NewCart';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CartItem from './CartItem';

export const Cart = (cartItems) => {
  const [carts, setCarts] = useState(() => {
    const savedCarts = localStorage.getItem('carts');
    return savedCarts ? JSON.parse(savedCarts) : [];
  });
  const { cartId } = useParams();

  const [error, setError] = useState(null);
  const [editModes, setEditModes] = useState({});
  const [originalCarts, setOriginalCarts] = useState({});

  useEffect(() => {
    fetchCarts();
  }, []);

  const fetchCarts = async () => {
    try {
      const response = await fetch('http://192.168.1.8:3000/api/v1/carts?include=customer');
      if (response.ok) {
        const data = await response.json();
        setCarts(data);
        setOriginalCarts(data.reduce((acc, cart) => {
          acc[cart.id] = { ...cart };
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

  const handleFormSubmit = (customer_id, book_id, quntity) => {
    const body = JSON.stringify({ cart: { customer_id, book_id, quntity} })
    fetch('http://192.168.1.8:3000/api/v1/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
    .then(response => response.json())
    .then(cart => {
      addNewCart(cart);
    });
  };

  const addNewCart = cart => {
    setCarts(prevState => [...prevState, cart]);
  };

  const handleEdit = cartId => {
    setEditModes(prevModes => ({
      ...prevModes,
      [cartId]: true
    }));
  };

  const handleSubmit = cart => {
    setEditModes(prevState => ({
      ...prevState,
      [cart.id]: false
    }));
    handleupdate(cart)
  };

  const handleupdate = cart => {
    fetch(`http://192.168.1.8:3000/api/v1/carts/${cart.id}`, {
      method: 'PUT',
      body: JSON.stringify({cart: cart}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(updatedCart => {
      updateCart(updatedCart)
    })
  }

  const updateCart = updatedCart => {
    setCarts(prevState =>
      prevState.map(cart => (cart.id === updatedCart.id ? updatedCart : cart))
    );
  };

  const handleBackButtonClick = cart => {
    const originalCart = originalCarts[cart.id];
    setCarts(prevState =>
      prevState.map(b => (b.id === cart.id ? originalCart : b))
    );
    setEditModes(prevState => ({
      ...prevState,
      [cart.id]: false
    }));
  };

  const handleDelete = async id => {
    const confirmed = window.confirm("Are you sure you want to delete this contact?");
    if (confirmed) {
      const response = await fetch(`http://192.168.1.8:3000/api/v1/carts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        console.log('delete');
        deleteCart(id)
      })
    }
  };

  const deleteCart = id => {
    setCarts(prevState => prevState.filter(cart => cart.id !== id));
  };

  const handleChange = (e, cart) => {
    const { name, value } = e.target;
    const updatedCart = { ...cart, [name]: value };
    setCarts(prevState =>
      prevState.map(b => (b.id === cart.id ? updatedCart : b))
    );
  };

  return (
    <div>
      <div>
        <div>
          <div className='bio-container'>
            <div className='title-2'>
              <h1>Carts</h1>
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
            </div>
          </div>
        </div>
        <div className='form-field'>
        <NewCart handleFormSubmit={handleFormSubmit} />
        </div>
      </div>
      <table className="salers-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody>
          {/* {CartItem.map((cart) => (
            <tr key={cart.id}>
              <td>{cart.book.title}</td>
              <td>{cart.book.author}</td>
              <td>{cart.book.description}</td>
              <td>{cart.book.price}</td>
              <td>{cart.quantity}</td>
              <td><button onClick={() => handleDelete(cart.id)}>Delete</button></td>
              <td>
                {editModes[cart.id] ? (
                  <div>
                    <button onClick={() => handleSubmit(cart)}>Submit</button>
                    <button onClick={() => handleBackButtonClick(cart)}>Back</button>
                  </div>
                ) : (
                  <button onClick={() => handleEdit(cart.id)}>Edit</button>
                )}
              </td>
              <td>
                <Link to={`/payment/${cart.id}`}><button>Payment</button></Link>
              </td>
            </tr>
          ))} */}
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
  )
}
// import React, { useState, useEffect } from 'react';
// import { NewCart } from './NewCart';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import CartItem from './CartItem';

// export const Cart = (cartItems) => {

//   const [carts, setCarts] = useState(() => {
//     const savedCarts = localStorage.getItem('carts');
//     return savedCarts ? JSON.parse(savedCarts) : [];
//   });
//   const { cartId } = useParams();
//   const [error, setError] = useState(null);
//   const [editModes, setEditModes] = useState({});
//   const [originalCarts, setOriginalCarts] = useState({});

//   useEffect(() => {
//     fetchCarts();
//   }, []);

//   // const fetchCarts = async () => {
//   //   try {
//   //     const response = await fetch('http://192.168.1.8:3000/api/v1/carts?include=customer');
//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       setCarts(data);
//   //     } else {
//   //       throw new Error('Failed to fetch data');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error fetching data:', error);
//   //     setError(error.message);
//   //   }
//   // };

//   const fetchCarts = async () => {
//     try {
//       const response = await fetch('http://192.168.1.8:3000/api/v1/carts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       setCarts(data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError(error.message);
//     }
//   };


//   const handleFormSubmit = (customer_id, book_id, quntity) => {
//     const body = JSON.stringify({ cart: { customer_id, book_id, quntity} })
//     fetch('http://192.168.1.8:3000/api/v1/carts', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: body,
//     })
//     .then(response => response.json())
//     .then(cart => {
//       addNewCart(cart);
//     });
//   };

//   const addNewCart = cart => {
//     setCarts(prevState => [...prevState, cart]);
//   };

//   const handleEdit = cartId => {
//     setEditModes(prevModes => ({
//       ...prevModes,
//       [cartId]: true
//     }));
//   };

//   const handleSubmit = cart => {
//     setEditModes(prevState => ({
//       ...prevState,
//       [cart.id]: false
//     }));
//     handleupdate(cart)
//   };

//   const handleupdate = cart => {
//     fetch(`http://192.168.1.8:3000/api/v1/carts/${cart.id}`, {
//       method: 'PUT',
//       body: JSON.stringify({cart: cart}),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => response.json())
//     .then(updatedCart => {
//       updateCart(updatedCart)
//     })
//   }

//   const updateCart = updatedCart => {
//     setCarts(prevState =>
//       prevState.map(cart => (cart.id === updatedCart.id ? updatedCart : cart))
//     );
//   };

//   const handleBackButtonClick = cart => {
//     const originalCart = originalCarts[cart.id];
//     setCarts(prevState =>
//       prevState.map(b => (b.id === cart.id ? originalCart : b))
//     );
//     setEditModes(prevState => ({
//       ...prevState,
//       [cart.id]: false
//     }));
//   };

//   const handleDelete = async id => {
//     const confirmed = window.confirm("Are you sure you want to delete this contact?");
//     if (confirmed) {
//       const response = await fetch(`http://192.168.1.8:3000/api/v1/carts/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       }).then(() => {
//         console.log('delete');
//         deleteCart(id)
//       })
//     }
//   };

//   const deleteCart = id => {
//     setCarts(prevState => prevState.filter(cart => cart.id !== id));
//   };

//   const handleChange = (e, cart) => {
//     const { name, value } = e.target;
//     const updatedCart = { ...cart, [name]: value };
//     setCarts(prevState =>
//       prevState.map(b => (b.id === cart.id ? updatedCart : b))
//     );
//   };

//   return (
//     <div>
//       <div>
//         <div>
//           <div className='bio-container'>
//             <div className='title-2'>
//               <h1>Carts</h1>
//               <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
//             </div>
//           </div>
//         </div>
//         <div className='form-field'>
//         <NewCart handleFormSubmit={handleFormSubmit} />
//         </div>
//       </div>
//       <table className="salers-table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>Quantity</th>
//             <th>Delete</th>
//             <th>Edit</th>
//             <th>Payment</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {carts.map((cart) => (
//             <tr key={cart.id}>
//               <td>{cart.book.title}</td>
//               <td>{cart.book.author}</td>
//               <td>{cart.book.description}</td>
//               <td>{cart.book.price}</td>
//               <td>{cart.quantity}</td>
//               <td><button onClick={() => handleDelete(cart.id)}>Delete</button></td>
//               <td>
//                 {editModes[cart.id] ? (
//                   <div>
//                     <button onClick={() => handleSubmit(cart)}>Submit</button>
//                     <button onClick={() => handleBackButtonClick(cart)}>Back</button>
//                   </div>
//                 ) : (
//                   <button onClick={() => handleEdit(cart.id)}>Edit</button>
//                 )}
//               </td>
//               <td>
//                 <Link to={`/payment/${cart.id}`}><button>Payment</button></Link>
//               </td>
//             </tr>
//           ))} */}
//         </tbody>

//       </table>
//       <div className='email'>
//         <div className="left-side">
//           <h2>Subscribe Now to Get Regular Updates</h2>
//           <input type="email" placeholder="Enter your email" />
//           <button className="subscribe-btn">Subscribe</button>
//         </div>
//         <div className='right-side'>
//           <img src='https://websitedemos.net/kathryn-ebook-author-02/wp-content/uploads/sites/1020/2022/02/susbcribe-image.png' alt='img'/>
//         </div>
//       </div>
//     </div>
//   )
// }

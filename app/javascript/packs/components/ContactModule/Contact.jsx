import React, { useState, useEffect } from 'react';
import './contact.css';
import { Newcontact } from './Newcontact';

export const Contact = () => {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = localStorage.getItem('contacts');
    return saveContacts ? JSON.parse(saveContacts) : [];
  });
  const [error, setError] = useState(null);
  const [editModes, setEditModes] = useState({});
  const [originalContacts, setOriginalContacts] = useState({});

  useEffect(() => {
    fetch('http://192.168.1.11:3000/api/v1/contacts')
      .then(response => response.json())
      .then(data => {
        setContacts(data);
        setOriginalContacts(data.reduce((acc, contact) => {
          acc[contact.id] = { ...contact };
          return acc;
        }, {}));
      });
      fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://192.168.1.11:3000/api/v1/contacts');
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch contacts. Please try again later.');
    }
  };

  const handleEdit = contectId => {
    setEditModes(prevModes => ({
      ...prevModes,
      [contectId]: true
    }));
  };

  const handleSubmit = contact => {
    setEditModes(prevState => ({
      ...prevState,
      [contact.id]: false
    }));
    handleupdate(contact)
  };

  const handleupdate = contact => {
    fetch(`http://192.168.1.11:3000/api/v1/salers/${saler.id}`, {
      method: 'PUT',
      body: JSON.stringify({contact: contact}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(updatedContact => {
      updateContact(updatedContact)
    })
  }

  const updateContact = updatedContact => {
    setContacts(prevState =>
      prevState.map(contact => (contact.id === updatedContact.id ? updatedContact : contact))
    );
  };

  const handleBackButtonClick = contact => {
    const originalContact = originalContacts[contact.id];
    setContacts(prevState =>
      prevState.map(b => (b.id === contact.id ? originalContact : b))
    );
    setEditModes(prevState => ({
      ...prevState,
      [contact.id]: false
    }));
  };

  const handleDelete = async id => {
    const confirmed = window.confirm("Are you sure you want to delete this contact?");
    if (confirmed) {
      const response = await fetch(`http://192.168.1.11:3000/api/v1/contacts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(() => {
        console.log('delete');
        deleteContact(id)
      })
    }
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const handleChange = (e, contact) => {
    const { name, value } = e.target;
    const updatedContact = { ...contact, [name]: value };
    setContacts(prevState =>
      prevState.map(b => (b.id === contact.id ? updatedContact : b))
    );
  };

  const handleFormSubmit = (name, email, subject, massage) => {
    const body = JSON.stringify({ contact: { name, email, subject, massage } })
    fetch('http://192.168.1.11:3000/api/v1/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    })
    .then(response => response.json())
    .then(contact => {
      addNewconCact(contact);
    });
  };

  const addNewconCact = contact => {
    setContacts(prevState => [...prevState, contact]);
  };


  return (
    <div>
      <div className='bio'>
        <div className='title-2'>
          <h1>Contact</h1>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
        </div>
      </div>
      <div className="main">
        <div className=''>
          <h1 className='heding'>Get In Touch</h1>
        </div>
        <div className='line-1'>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
        </div>
        <div className='mail'>
          <p>mail@example.com</p>
        </div>
        <div style={styles.line_to}></div>

        <div>
          <p className='msg'>Send Me a Message</p>
        </div>
        <Newcontact handleFormSubmit={handleFormSubmit}/>
        <div className='follow'>
          <p>Follow Me</p>
        </div>
        <div>
          <table className="salers-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Subject</th>
                <th>Massage</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {contacts.slice().reverse().map(contact => (
                <tr key={contact.id}>
                  <td>
                    {editModes[contact.id] ? (
                      <input
                        name="name"
                        value={contact.name}
                        onChange={e => handleChange(e, contact)}
                        placeholder="Title"
                      />
                    ) : (
                      contact.name
                    )}
                  </td>
                  <td>
                    {editModes[contact.id] ? (
                      <input
                        name="email"
                        value={contact.email}
                        onChange={e => handleChange(e, contact)}
                        placeholder="Email"
                      />
                    ) : (
                      contact.email
                    )}
                  </td>
                  <td>
                    {editModes[contact.id] ? (
                      <input
                        name="subject"
                        value={contact.subject}
                        onChange={e => handleChange(e, contact)}
                        placeholder="Subject"
                      />
                    ) : (
                      contact.subject
                    )}
                  </td>
                  <td>
                    {editModes[contact.id] ? (
                      <input
                        name="massage"
                        value={contact.massage}
                        onChange={e => handleChange(e, contact)}
                        placeholder="Massage"
                      />
                    ) : (
                      contact.massage
                    )}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(contact.id)}>Delete</button>
                  </td>
                  <td>
                    {editModes[contact.id] ? (
                      <div>
                        <button onClick={() => handleSubmit(contact)}>Submit</button>
                        <button onClick={() => handleBackButtonClick(contact)}>Back</button>
                      </div>
                    ) : (
                      <button onClick={() => handleEdit(contact.id)}>Edit</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  )
}
const styles = {
  line_to: {
    position: 'absolute',
    top: '-28%',
    right: '15%',
    marginTop: '990px',
    transform: 'translate(-50%, -50%)',
    width: '590px',
    height: '0.5px',
    backgroundColor: ' #946659',

  },
}
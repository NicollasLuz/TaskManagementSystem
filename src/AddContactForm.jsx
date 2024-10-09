import React, { useState } from 'react';
import ContactList from './ContactList';

function AddContactForm() {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (inputType, e) => {
    if (inputType === 'name') {
      setName(e.target.value);
    } else if(inputType === 'phone') {
      setPhone(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Date.now(),
      name,
      phone,
      email
    };
    setContacts([...contacts, newContact]);
    setName('');
    setPhone('');
    setEmail('');
  };

  const handleEdit = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ));
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="wrapper">
      <div className="card">
      <form id="Add" className="tabcontent">
        <h2 className='Marinho'>Seja bem vindo!</h2>
          <div className="field">
            <svg
              viewBox="0 0 16 16"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              className="input-icon"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            <input 
              className="input-field"
              type="text" 
              value={name} 
              onChange={(e) => handleChange('name', e)} 
              placeholder="Nome" 
              required 
            />
          </div>
          <br />
          <div className="field">
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          fill="currentColor" 
          className="bi bi-telephone" 
          viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
          </svg>
            <input 
              className="input-field"
              type="text" 
              value={phone} 
              onChange={(e) => handleChange('phone', e)} 
              placeholder="Telefone" 
              required 
            />
          </div>
          <br />
          <div className="field">
          <svg
            viewBox="0 0 13 13"
            fill="currentColor"
            height="19"
            width="19"
            xmlns="http://www.w3.org/2000/svg"
            className="input-icon"
          >
            <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
          </svg>
            <input 
              className="input-field"
              type="text" 
              value={email} 
              onChange={(e) => handleChange('email', e)} 
              placeholder="E-mail" 
              required 
            />
          </div>
          <br />
          <button 
            className="button1"
            type="submit"
            onClick={handleSubmit}
          >
            Adicionar
          </button>
        </form>
      </div>  
      <ContactList 
        contacts={contacts} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    </div>
  );
}

export default AddContactForm;

import React, { useState } from 'react';
import './Contacts.css';
import './AddContactForm.css'

function ContactList({ contacts, onEdit, onDelete }) {
  const [editingId, setEditingId] = useState(null);

  const handleEdit = (contact) => {
    if (editingId === contact.id) {
      // Save the edited contact
      onEdit(contact);
      setEditingId(null);
    } else {
      setEditingId(contact.id);
    }
  };

  return (
    <div id="View" className="tabcontent">
      <h1 className="TituloContatos">Contatos</h1>
      <ul className="contatosContainer">      
        {contacts.map((contact) => (
          <li key={contact.id} className="contactItem">
            {editingId === contact.id ? (
              // Edit form
              <form onSubmit={(e) => {
                e.preventDefault();
                handleEdit({
                  ...contact,
                  name: e.target.name.value,
                  phone: e.target.phone.value,
                  email: e.target.email.value
                });
              }}>
                <input name="name" defaultValue={contact.name} />
                <input name="phone" defaultValue={contact.phone} />
                <input name="email" defaultValue={contact.email} />
                <button type="submit">Save</button>
              </form>
            ) : (
              // Display contact
              <>
                <p>Nome: {contact.name} ⦿ Telefone: {contact.phone} ⦿ E-mail: {contact.email}</p>
                <div className="buttonContainer"> 
                <button onClick={() => setEditingId(contact.id) } className="ButtonEdit">Edit</button>
                <button onClick={() => onDelete(contact.id)} className="ButtonDelete">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;

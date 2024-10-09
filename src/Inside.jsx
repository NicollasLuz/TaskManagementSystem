import React, { useState } from 'react';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';


function Inside() {

  const [contacts, setContacts] = useState([]);
 
    return( 
        <>
        <h1>Bem vindo ao site</h1>
        <AddContactForm setContacts={setContacts} />
        <ContactList contacts={contacts} />
        </>
    )
  }
  
  export default Inside
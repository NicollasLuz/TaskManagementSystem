import React, { useState } from 'react';
import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import Navbar from './NavBar/NavBar';


function Inside() {

  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState('Add'); // Estado para a aba ativa
 
    return( 
      <div>
          <h1>Bem vindo ao site</h1>
        <Navbar setActiveTab={setActiveTab} />
        {activeTab === 'Add' && <AddContactForm setContacts={setContacts} />}
        {activeTab === 'View' && <ContactList contacts={contacts} />}
      </div>
    )
  }
  
  export default Inside
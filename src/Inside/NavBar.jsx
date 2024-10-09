import React, { useState } from 'react';
import './Navbar.css';
import Tab from './NavBar/Tab';
import ContactList from './ContactList'; // Assuming you have this component

function Navbar({ contacts, setContacts }) {
  const [activeTab, setActiveTab] = useState('home'); // Default active tab

  return (
    <div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Tab 
          contacts={contacts} 
          setContacts={setContacts} 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      
      {activeTab === 'contacts' && <ContactList contacts={contacts} />}
      
    </div>
  );
}

export default Navbar;
import React, { useState } from 'react';
import './Navbar.css';
import Tab from './Tab';
import ContactList from '../ContactList';

function Navbar({ contacts, setContacts }) {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <>
      <nav className="navbar">
        <div className="navbar-content">
          <Tab 
            contacts={contacts} 
            setContacts={setContacts} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </nav>
      
      {/* Add some padding to the body to prevent content from hiding behind the navbar */}
      <div style={{ paddingTop: '60px' }}>
        {activeTab === 'contacts' && <ContactList contacts={contacts} />}
      </div>
    </>
  );
}

export default Navbar;

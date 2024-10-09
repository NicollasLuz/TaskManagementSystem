import './Navbar.css';
import AddContactForm from '../AddContactForm';
import ContactList from '../ContactList';
function Tab(contacts, setContacts) {
  return (
    <div className="tab">
      <a className="dropdown-item" onClick={(e) => openOption(e, 'Add')} href="#">Adicionar</a>
      <a className="dropdown-item" onClick={(e) => openOption(e, 'View')} href="#">Visualizar</a>
      {openOption === 'View' && <ContactList contacts={contacts} />}
      {openOption === 'Add' && <AddContactForm setContacts={setContacts} />}
    </div>
  );
}

function openOption(evt, optionName) {
          // Declare all variables
          let i, tabcontent, tablinks;
      
          // Get all elements with class="tabcontent" and hide them
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
        
          // Get all elements with class="tablinks" and remove the class "active"
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
        
          // Show the current tab, and add an "active" class to the link that opened the tab
          document.getElementById(optionName).style.display = "block";
          evt.currentTarget.className += " active";
}

export default Tab;
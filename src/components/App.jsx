import React, { useState, useEffect } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storedContacts);
    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (contact) => {
    if (contacts.find((item) => item.name === contact.name)) {
      alert('Contact already exists');
      return;
    }
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const contactToDelete = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleFilterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = handleFilterContacts();

  return (
    <div>
      <ContactsForm addContact={handleAddContact} />
      <Filter value={filter} handleChange={handleChange} />
      <ContactsList contacts={filteredContacts} contactToDelete={contactToDelete} />
    </div>
  );
};

export default App;

// import React, { Component } from 'react';
// import ContactsForm from './ContactsForm/ContactsForm';
// import ContactsList from './ContactsList/ContactsList';
// import Filter from './Filter/Filter';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };
// componentDidMount(){
//   const contacts = localStorage.getItem('contacts');
//   const parseContacts = JSON.parse(contacts);
//   if(parseContacts){
//     this.setState({contacts: parseContacts});
//   }
// }
// componentDidUpdate(prevState){
//   const nextContact = this.state.contacts;
//   const prevContact = prevState.contacts;
//   if(nextContact !== prevContact){
//     localStorage.setItem('contacts', JSON.stringify(nextContact))
//   }
// }
//   handleAddContact = contact => {
//     if(this.state.contacts.find(item => item.name === contact.name)){
//       alert('Contact already exists');
//       return
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, contact],
//     }));
//   };

//   contactToDelete = id => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== id),
//       };
//     });
//   };

//   handleChange = e => {
//     this.setState({ filter: e.target.value });
//   };
  
//   handleFilterContacts = () => {
//     return this.state.contacts.filter(contact => {
//       return contact.name
//         .toLowerCase()
//         .includes(this.state.filter.toLowerCase().trim());
//     });
//   };

//   render() {
//     const filteredContacts = this.handleFilterContacts();
//     return (
//       <div>
//         <ContactsForm addContact={this.handleAddContact} />
//         <Filter value={this.state.filter} handleChange={this.handleChange} />
//         <ContactsList
//           contacts={filteredContacts}
//           contactToDelete={this.contactToDelete}
//         />
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleAddContact = contact => {
    if(this.state.contacts.find(item => item.name === contact.name)){
      alert('Contact already exists');
      return
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  contactToDelete = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };
  
  handleFilterContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase().trim());
    });
  };

  render() {
    const filteredContacts = this.handleFilterContacts();
    return (
      <div>
        <ContactsForm addContact={this.handleAddContact} />
        <Filter value={this.state.filter} handleChange={this.handleChange} />
        <ContactsList
          contacts={filteredContacts}
          contactToDelete={this.contactToDelete}
        />
      </div>
    );
  }
}

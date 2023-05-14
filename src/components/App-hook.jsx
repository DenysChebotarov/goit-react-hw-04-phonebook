import { useState } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

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

  const handleFilterContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  const filteredContacts = handleFilterContacts();

  return (
    <div>
      <ContactsForm addContact={handleAddContact} />
      <Filter value={filter} handleChange={(e) => setFilter(e.target.value)} />
      <ContactsList contacts={filteredContacts} contactToDelete={contactToDelete} />
    </div>
  );
}

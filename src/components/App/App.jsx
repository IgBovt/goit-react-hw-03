import { useState, useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from './App.module.css';
import { nanoid } from 'nanoid';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts'))
  );
  const [query, setQuery] = useState('');

  const filteredContacts = contacts.filter(
    contact => contact.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  const addContact = newContact => {
    setContacts(prevContacts => {
      newContact.id = nanoid();
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = contactID => {
    setContacts(prevContacts => {
      return prevContacts.filter(contact => contact.id !== contactID);
    });
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={query} onChange={setQuery} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}

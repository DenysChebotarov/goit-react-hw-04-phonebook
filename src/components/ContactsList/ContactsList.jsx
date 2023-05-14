import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css'

export default function ContactsList({ contacts, contactToDelete }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <span>{contact.name}</span>:<span>{contact.number}</span>
            <button className={css.button} onClick={() => contactToDelete(contact.id)}>Delete</button>
          </li>
        );
      })}
    </ul>
  );
}

ContactsList.propTypes ={
  contacts : PropTypes.array.isRequired,
  contactToDelete : PropTypes.func.isRequired,
}

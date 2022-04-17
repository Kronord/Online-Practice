import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import s from './Contacts.module.css';
import * as APIService from 'service/api-service';

const Contacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      APIService.getContacts().then(res => {
        console.log(res);
        setContacts(res);
      });
    }, []);

    const deleteContact = contactId => {
      setContacts(prevState =>
        prevState.filter(contact => contact.id !== contactId)
      );
      APIService.deleteContact(contactId);
    };

  return (
    <ul>
      {contacts.map(({ name, id, number, email }) => (
        <li key={id} className={s.item}>
          <p>
            {name}: {number}
          </p>
          <p>{email}</p>
          <button
            type="button"
            onClick={() => deleteContact(id)}
            className={s.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
};

export default Contacts;

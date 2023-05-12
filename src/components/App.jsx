import React from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactItem } from './ContactItem/ContactItems';
import css from './App.module.css';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      <div className={css.smalContainer}>
        <Filter />

        <ContactList>
          <ContactItem />
        </ContactList>
        <Toaster />
      </div>
    </div>
  );
};

 

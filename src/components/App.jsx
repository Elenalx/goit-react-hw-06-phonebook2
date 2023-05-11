import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from 'components/ContactForm/ContactForm.module.css';
import { ContactItem } from './ContactItem/ContactItems';
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

 

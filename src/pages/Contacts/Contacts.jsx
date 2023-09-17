import ContactList from 'components/ContactList/ContactList';
import { Form } from '../../components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  return (
    <>
      <Form />
      <ContactList />
      <Filter />
    </>
  );
};

export default Contacts;

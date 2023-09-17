import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import Button from '@mui/material/Button';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import { useState } from 'react';
import s from './ContactForm.module.css';
import TextField from '@mui/material/TextField';

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();

    const repeatCont = contacts?.some(
      elem => elem.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatCont) {
      alert(`Sorry:( , but ${name} already in contacts`);
      return;
    }

    const user = { name, number };
    dispatch(addContact(user));
    setName('');
    setNumber('');
  };

  return (
    <div className={s.form_wrapper}>
      <form onSubmit={handlerSubmit}>
        <TextField
          sx={{ marginRight: '80px' }}
          className={s.input}
          type="text"
          label="Name"
          name="name"
          variant="outlined"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
        <TextField
          sx={{ marginRight: '70px' }}
          className={s.input}
          type="text"
          label="Name"
          name="number"
          variant="outlined"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" startIcon={<AddIcCallIcon />}>
          Add Contact
        </Button>
      </form>
    </div>
  );
};

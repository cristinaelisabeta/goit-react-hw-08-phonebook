import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contacts-actions';
import TextField from '@mui/material/TextField';
import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const name = useSelector(state => state.contacts.filter);

  const handlerFilterUsers = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <div className={s.input_wrapper}>
      <h2>Find contacts by name</h2>
      <TextField
        className={s.input}
        type="text"
        label="Name"
        name="name"
        variant="outlined"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handlerFilterUsers}
      />
    </div>
  );
}

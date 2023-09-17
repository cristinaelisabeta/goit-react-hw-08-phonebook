import PropTypes from 'prop-types';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const handlerDelete = id => {
    dispatch(deleteContact(id));
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul>
      {filterContacts()?.map(({ id, name, number }) => {
        return (
          <li className={s.contact__item} key={id}>
            <p className={s.contact__text}>
              Name: <span className={s.contact__num}>{name}</span>
            </p>
            <p className={s.contact__text}>
              Phone: <span className={s.contact__num}>{number}</span>
            </p>

            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => handlerDelete(id)}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

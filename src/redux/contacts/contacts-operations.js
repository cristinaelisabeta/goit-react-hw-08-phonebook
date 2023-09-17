import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectedWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success(' Contact added');
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async (id, { rejectedWithValue }) => {
    try {
      await axios.delete(`/contacts/${id}`);
      toast.success('Deleted');
      return id;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

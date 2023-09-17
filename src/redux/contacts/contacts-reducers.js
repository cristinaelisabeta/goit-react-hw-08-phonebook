import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { filterContacts } from './contacts-actions';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const filter = createReducer('', {
  [filterContacts]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContacts.pending]: (state, { payload }) => true,
  [fetchContacts.fulfilled]: (state, { payload }) => false,
  [fetchContacts.rejected]: (state, { payload }) => false,
  [addContact.pending]: (state, { payload }) => true,
  [addContact.fulfilled]: (state, { payload }) => false,
  [addContact.rejected]: (state, { payload }) => false,
  [deleteContact.pending]: (state, { payload }) => true,
  [deleteContact.fulfilled]: (state, { payload }) => false,
  [deleteContact.rejected]: (state, { payload }) => false,
});

export const contactsReduser = combineReducers({
  items,
  filter,
  loading,
});

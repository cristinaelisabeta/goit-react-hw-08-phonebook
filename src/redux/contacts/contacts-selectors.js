import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getLoading = state => state.contacts.loading;

export const getVisibleContacts = createSelector(
  (getContacts, getFilter),
  (contacts, filter) =>
    contacts.filter(el => el.name.toLowerCase().includes(filter.toLowerCase()))
);

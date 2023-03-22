import React from 'react';
import { useEffect } from 'react';
import { List, Item, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/contactsSelectors';

import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contactsOperations';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const filterContactsOnChange = () => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {filterContactsOnChange().map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name} : {number}
          </p>
          <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};
export default ContactList;

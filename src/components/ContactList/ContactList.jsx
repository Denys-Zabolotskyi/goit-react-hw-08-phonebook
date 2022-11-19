import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

const ContactList = ({contacts, onDeleteContact}) => {
    return (
    <List>
        {contacts.map(({ id, name, number }) => (
            <Item key={id}>
            <p>{name} : {number}</p>
            <Button onClick={()=> onDeleteContact(id)}>Delete</Button>
            </Item>))}
    </List>
    );
};
ContactList.propType = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}
export default ContactList;
import React from 'react';
import { List, Item, Button } from './ContactList.styled';
const ContactList = ({contacts}) => {
    return (
    
    <List>
        {contacts.map(({ id, name, number }) => (
            <Item key={id}>
            <p>
              {name} : {number}
                </p>
                <Button>Delete</Button>
            </Item>))}
    </List>
    );
};

export default ContactList;
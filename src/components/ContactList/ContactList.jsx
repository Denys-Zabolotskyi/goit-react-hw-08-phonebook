import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

// const ContactList = ({ contacts, onDeleteContact }) => {
//   return (
//     <List>
//       {contacts.map(({ id, name, number }) => (
//         <Item key={id}>
//           <p>
//             {name} : {number}
//           </p>
//           <Button onClick={() => onDeleteContact(id)}>Delete</Button>
//         </Item>
//       ))}
//     </List>
//   );
// };
const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <p>
            {name} : {number}
          </p>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;

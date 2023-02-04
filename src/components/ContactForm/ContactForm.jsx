import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';

const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const target = evt.currentTarget.name;
    const value = evt.currentTarget.value;
    switch (target) {
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

  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   addContact({ name, number });
  //   setName('');
  //   setNumber('');
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.currentTarget.name.value;
    const number = evt.currentTarget.number.value;
    dispatch(addContact(name, number));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="contat_name">Name</FormLabel>
      <FormInput
        onChange={handleChange}
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormLabel htmlFor="contact_number">Number</FormLabel>
      <FormInput
        onChange={handleChange}
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
export default ContactForm;

import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const initualValues = {
    name: '',
    phone: '',
  };

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  // const handleAddContact = ({ name, phone }) => {
  //   // evt.preventDefault();
  //   console.log(name.value);
  //   console.log(phone.value);
  //   // const form = evt.target;
  //   // dispatch(addContact(evt.target.elements.text.value));
  //   // form.reset();
  //   // if (
  //   //   contacts.find(
  //   //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   //   )
  //   // ) {
  //   //   alert(`${name} is already in contacts`);
  //   //   return;
  //   // }
  //   // if (
  //   //   contacts.find(
  //   //     contact => contact.phone.toLowerCase() === phone.toLowerCase()
  //   //   )
  //   // ) {
  //   //   alert(`phone ${phone} is already in contacts`);
  //   //   return;
  //   // }
  //   // const newContact = {
  //   //   name,
  //   //   phone,
  //   // };
  //   // dispatch(addContact({ name, name }));
  //   // console.log(newContact);
  //   // resetForm();
  // };
  // const handleAddContact = evt => {
  //   evt.preventDefault();
  //   const { name, phone } = evt.target;
  //   const form = evt.target;
  //   // contacts.find(
  //   //   contact => contact.name.toLowerCase() === name.value.toLowerCase()
  //   // )
  //   //   ? alert(`${name.value} is already in contacts`)
  //   //   :
  //   dispatch(addContact(name.value, phone.value));
  //   form.reset();
  // };

  const handleAddContact = ({ name, phone }) => {
    dispatch(addContact({ name, phone }));
  };

  return (
    <Form onSubmit={handleAddContact}>
      <FormLabel htmlFor="contat_name">Name</FormLabel>
      <FormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormLabel htmlFor="contact_number">Number</FormLabel>
      <FormInput
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};

export default ContactForm;

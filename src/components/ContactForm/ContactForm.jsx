import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAddContact = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    dispatch(addContact({ name, phone }));
    e.target.reset();
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

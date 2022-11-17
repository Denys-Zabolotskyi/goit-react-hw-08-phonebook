import React, { Component } from 'react';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';
class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
handleChange = (evt) => {
    const { name, value} = evt.currentTarget
    this.setState({ [name]: value} )
};

handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    };

reset = () => {
    this.setState({ name: '', number: '' });
  };

render() {
        return (
        <Form onSubmit={this.handleSubmit}>
        <FormLabel htmlFor="contat_name">Name</FormLabel>
        <FormInput onChange={this.handleChange}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          <FormLabel htmlFor="contact_number">Number</FormLabel>
        <FormInput onChange={this.handleChange}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
          <FormButton type='submit'>Add contact</FormButton>
        </Form>
        );
    }
}

export default ContactForm;
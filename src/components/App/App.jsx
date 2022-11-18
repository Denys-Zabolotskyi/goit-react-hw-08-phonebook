import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, MainTitle, SecondaryTitle } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList'

class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(7),
      name,
      number,
    };
    const { contacts } = this.state;
    contacts.find(contact => newContact.name.toLowerCase() === contact.name.toLocaleLowerCase())
      ? alert(`${newContact.name} is already in contacts.`)
      :this.setState(({contacts}) => ({
      contacts: [newContact, ...contacts],
    
    }))
    
  };
  
  handleChange = (evt) => {
    const { name, value} = evt.currentTarget
    this.setState({ [name]: value} )
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
   
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addContact } />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter value={normalizedFilter} onChange={ this.handleChange} />
        <ContactList contacts={filteredContacts}/>      
      </Container>
    );
  }
};
 
export default App;
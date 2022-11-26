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

 componentDidMount() {
   const contactList = localStorage.getItem('contacts');
   const parsedContactList = JSON.parse(contactList);
   if (parsedContactList) {
     this.setState ({ contacts: parsedContactList,})
   }
   
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
   };

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

  deleteContact = (contactID) => {
    this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== contactID) }))
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
        <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />      
      </Container>
    );
  }
};
 
export default App;
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, MainTitle, SecondaryTitle } from './App.styled';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
// import ContactList from 'components/ContactList'

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
//   handleChange = (evt) => {
//     const { name, value} = evt.currentTarget
//     this.setState({ [name]: value} )
// };
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(7),
      name,
      number,
    };
    console.log(contact);
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }))
    
  };

  getFilteredContacts = () => {
    const {filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
  }
  handleChange = (evt) => {
    const { name, value} = evt.currentTarget
    this.setState({ [name]: value} )
};
  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
    // const filteredContacts = this.getFilteredContacts();
    return (
      <Container>
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.addContact } />
        <SecondaryTitle>Contacts</SecondaryTitle>
    {/* <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="contat_name">Name <br /></label>
        <input onChange={this.handleChange}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          <label htmlFor="contact_number">Number <br /></label>
        <input onChange={this.handleChange}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
          <button type='submit'>Add contact</button>
        </form> */}
        <div>
          
          {/* <label htmlFor="fiiter">Finde contacts by name <br /></label>
        <input onChange={this.handleChange}
          type="text"
          name='filter'
          value={this.state.filter}
        /> */}
          {/* <Filter  /> */}
          <Filter value={normalizedFilter} onChange={ this.handleChange} />
        {/* <label htmlFor="">
           Finde contacts by name
           <input type="text" name='filter' value={normalizedFilter} onChange={this.handleChange} />
        </label> */}
          <ul>
            {filteredContacts.map((contact)=>(<li key={contact.id}>{contact.name}: {contact.number}</li>))}
          </ul>
        </div>
        {/* <Contact  List/> */}
        
</Container>
    );
  }
};
 
export default App;
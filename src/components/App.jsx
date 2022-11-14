import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
  
  handleChange = (evt) => {
    const { name, value} = evt.currentTarget
    this.setState({ [name]: value} )
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const contact = {
      id: nanoid(7),
      name: this.state.name,
      number: this.state.number
    };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }))
    // this.setState((prevState) =>
    //   ({ contacts: [{ name: this.state.name, id: nanoid() }, ...prevState.contacts], })
    // )
    this.reset();
    };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  getFilteredContacts = () => {
    const {filter, contacts} = this.state
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
  }

  render() {

    // const normalizedFilter = this.state.filter.toLowerCase();
    // const filteredContacts = this.state.contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="contat_name">Name <br /></label>
        <input onChange={this.handleChange}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          /> <br />
          <label htmlFor="contact_number">Number <br /></label>
        <input onChange={this.handleChange}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /> <br /> <br />
          <button type='submit'>Add contact</button>
        </form>
        <div>
          <h1>Contacts</h1>
          <label htmlFor="fiiter">Finde contacts by name <br /></label>
        <input onChange={this.handleChange}
          type="text"
          name='filter'
          value={this.state.filter}
        />
          <ul>
            {filteredContacts.map((contact)=>(<li key={contact.id}>{contact.name}: {contact.number}</li>))}
          </ul>
        </div>
</div>
    );
  }
};
 
export default App;
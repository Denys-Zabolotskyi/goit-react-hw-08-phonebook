import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
state = {
  contacts: [],
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

  render()
  {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="contat_name">Name </label>
        <input onChange={this.handleChange}
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          /> {' '}
          <label htmlFor="contact_number">Number</label>
        <input onChange={this.handleChange}
          type="tel"
          name="number"
          value={this.state.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
          <button type='submit'>Add contact</button>
        </form>
        <div>
          <h1>Contacts</h1>
          <ul>
            {this.state.contacts.map((contact)=>(<li key={contact.id}>{contact.name}: {contact.number}</li>))}
          </ul>
        </div>
</div>
    );
  }
};
 
export default App;
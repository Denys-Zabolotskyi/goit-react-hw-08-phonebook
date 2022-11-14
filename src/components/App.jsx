import { nanoid } from 'nanoid';
import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

class App extends Component {
state = {
  contacts: [],
  name: ''
  }
  
  handleChange = (evt) => {
    this.setState({ name: evt.currentTarget.value} )
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState((prevState) =>
      ({ contacts: [{ name: this.state.name, id: nanoid() }, ...prevState.contacts], })
    )
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
          <button type='submit'>Add contact</button>
        </form>
        <div>
          <h1>Contacts</h1>
          <ul>
            {this.state.contacts.map((contact)=>(<li key={contact.id}>{contact.name}</li>))}
          </ul>
        </div>
</div>
    );
  }
};
 
export default App;
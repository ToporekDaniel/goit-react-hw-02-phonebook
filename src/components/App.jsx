import styled from 'styled-components';
import { Component } from 'react';
import { NameList } from './list/list';
import { nanoid } from 'nanoid';
import { Filter } from './filter/filter';

const SubmitButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const Form = styled.form``;

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
      name: '',
      number: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, contacts, number } = this.state;
    const id = nanoid();
    console.log(name, number, id);
    this.setState({ contacts: [...contacts, { id, name, number }] });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleTelChange = event => {
    this.setState({ number: event.target.value });
  };
  handleFilterChange = filterValue => {
    this.setState({ filter: filterValue });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
    return (
      <>
        <h2>Phonebook</h2>
        <Form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              onChange={this.handleNameChange}
              type="text"
              name="name"
              pattern="^[a-z A-Z а-я А-Я]+(([' -][a-z A-Z а-я А-Я ])?[a-z A-Z а-я А-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.handleTelChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <SubmitButton type="submit">Add contact</SubmitButton>
        </Form>
        <h2>Contacts</h2>
        <Filter onFilterChange={this.handleFilterChange} />
        <NameList contacts={filteredContacts} />
      </>
    );
  }
}

import styled from 'styled-components';
import { Component } from 'react';
import { NameList } from './list/list';
import { nanoid } from 'nanoid';

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
      contacts: [],
      name: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { name, contacts } = this.state;
    console.log(name);
    const id = nanoid();
    this.setState({ contacts: [...contacts, { id, name }] });
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    const { contacts } = this.state;
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
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
        <h2>Contacts</h2>
        <NameList contacts={contacts} />
      </>
    );
  }
}

import styled from 'styled-components';
import { NameInput, TelInput } from './../input/inputs';
import { Component } from 'react';
import { nanoid } from 'nanoid';

const SubmitButton = styled.button`
  width: 10rem;
  height: 3rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const Form = styled.form``;

export class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      number: '',
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleTelChange = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    console.log(name, number, id);
    this.props.onSubmit({ id, name, number });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <NameInput onChange={this.handleNameChange} />
        <TelInput onChange={this.handleTelChange} />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    );
  }
}

import styled from 'styled-components';
import { NameInput } from './input/inputs';
import { Component, useState } from 'react';

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
    console.log(this.state.name);
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <NameInput onChange={this.handleNameChange} />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </>
    );
  }
}

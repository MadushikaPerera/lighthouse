import React, { Component } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

class Step2 extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Input label="Email" placeholder="stephanie@lighthouse.io" />
        <Form.Field>
          <label>Username</label>
          <input placeholder="Username" />
        </Form.Field>
        <Form.Field>
          <label>Passwod</label>
          <input placeholder="Password" type="password" />
        </Form.Field>
      </Form>
    );
  }
}

export default Step2;

import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import Countries from "./countries";

class Step1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orgName: "",
      orgType: "",
      about: "",
      type: "",
      country: ""
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.orgName !== nextState.orgName);
  }

  isValidated() {
    return false;
  }

  _validate(inputs) {
    // check for empty fields
    if (
      inputs.orgName !== "" &&
      inputs.orgType !== "" &&
      inputs.about !== "" &&
      inputs.country !== "" &&
      inputs.type !== ""
    ) {
      return true;
    } else {
      // display error
    }
  }

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input
            label="Organization name"
            placeholder="Organization name"
            onChange={(e, { value }) => this.setState({ orgName: value })}
          />
          <Form.Select
            label="Country"
            options={Countries}
            placeholder="Country"
            onChange={(e, { value }) => this.setState({ country: value })}
          />
        </Form.Group>
        <Form.Group inline>
          <label>Type</label>
          <Form.Radio
            label="University"
            value="un"
            checked={value === "un"}
            onChange={this.handleChange}
          />
          <Form.Radio
            label="Institute"
            value="in"
            checked={value === "in"}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea
          label="About"
          placeholder="Tell us more about the organization..."
          onChange={(e, { value }) => this.setState({ about: value })}
        />

      </Form>
    );
  }
}

export default Step1;

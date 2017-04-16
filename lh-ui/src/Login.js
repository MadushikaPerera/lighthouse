import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { Grid, Segment } from "semantic-ui-react";

const Login = () => (
  <div>
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <Button positive>Biometric login</Button>
        </Grid.Column>
        <Grid.Column>
          <Form>
            <h2> Login to Lighthouse</h2>
            <Form.Field>
              <label>Email</label>
              <input placeholder="Email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder="Password" />
            </Form.Field>
            <Button type="submit">Login</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

export default Login;

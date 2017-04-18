import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Image, Input, Label, Menu, Card, Feed } from "semantic-ui-react";
import Navigation from "./components/Navigation";
import Activity from "./components/Activity";
import Login from "./components/Login";
import logo from "./logo.svg";
import "./Signup.css";

import StepZilla from "react-stepzilla";
import Step1 from "./components/signup/step1";
import Step2 from "./components/signup/step2";
import Step3 from "./components/signup/step3";

class App extends Component {
  state = { activeItem: "inbox" };

  constructor(props) {
    super(props);
    this.navColor = "blue";
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const steps = [
      {
        name: "Organization details",
        component: <Step1 />
      },
      {
        name: "Administrator",
        component: <Step2 />
      },
      {
        name: "Biometric Authentication",
        component: <Step3 />
      }
    ];

    return (
      <Router>
        <div>
          <Navigation color={this.navColor} />
          <Grid celled="internally">
            <Grid.Row>
              <Grid.Column width={3}>
                <Menu vertical>
                  <Menu.Item
                    name="inbox"
                    active={activeItem === "inbox"}
                    onClick={this.handleItemClick}
                  >
                    <Label color="teal">1</Label>
                    Dashboard
                  </Menu.Item>

                  <Menu.Item
                    name="spam"
                    active={activeItem === "spam"}
                    onClick={this.handleItemClick}
                  >
                    <Label>51</Label>
                    Feedback
                  </Menu.Item>

                  <Menu.Item
                    name="updates"
                    active={activeItem === "updates"}
                    onClick={this.handleItemClick}
                  >
                    <Label>1</Label>
                    Stuff
                  </Menu.Item>
                  <Menu.Item>
                    <Input icon="search" placeholder="Search mail..." />
                  </Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column width={10}>
                <Route path="/login" component={Login} />
                <div className="step-progress">
                  <StepZilla steps={steps} showSteps={true} />
                </div>
              </Grid.Column>
              <Grid.Column width={3}>
                <Activity />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Router>
    );
  }
}

export default App;

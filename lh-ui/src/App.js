import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Grid, Image, Input, Label, Menu, Card, Feed } from "semantic-ui-react";
import Navigation from "./Navigation";
import Chat from './components/chat/ChatPopupContainer';
import Activity from './Activity';
import Login from "./Login";
import logo from "./logo.svg";
import "./App.css";

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

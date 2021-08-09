import React, { Component } from "react";
import Card from "../screens/Card";
import Email from "../input/Email";
import Password from "../input/Password";
import ButtonSubmit from "../button/ButtonSubmit";
import Reminder from "../screens/Reminder";
import Layout from "../screens/Layout";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPassword = this.setPassword.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginUser({
      email: this.state.email,
      password: this.state.password,
    });
    this.setState({ email: "" });
    this.setState({ password: "" });
  }

  setPassword() {
    this.setState({ showPassword: !this.state.showPassword });
  }

  render() {
    return (
      <Layout>
        <Card title="Login">
          <form onSubmit={this.handleSubmit}>
            <Email
              id="email"
              name="email"
              label="Email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <Password
              name="password"
              id="password"
              label="Password"
              onChange={this.handleChange}
              value={this.state.password}
            />
            <ButtonSubmit />
            <Reminder path="/register" />
          </form>
        </Card>
      </Layout>
    );
  }
}

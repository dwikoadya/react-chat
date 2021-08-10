import React, { Component } from "react";
import Card from "../screens/Card";
import Email from "../input/Email";
import Text from "../input/Text";
import Password from "../input/Password";
import ButtonSubmit from "../button/ButtonSubmit";
import ReminderLogin from '../screens/ReminderLogin'
import Layout from "../screens/Layout";

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      retype: "",
      showPassword: false,
      showRetype: false,
      errors: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      this.props.addUser({
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        retype: this.state.retype,
        isLoggedIn: true,
      });
      this.setState({ username: "" });
      this.setState({ email: "" });
      this.setState({ password: "" });
      this.setState({ retype: "" });

    }
  }

  validate() {
    let errors = {};
    let isValid = true;

    if (!this.state.username) {
      isValid = false;
      errors.username = "Please enter your username";
    }

    if (!this.state.email) {
      isValid = false;
      errors.email = "Please enter your email";
    }

    if (!this.state.password) {
      isValid = false;
      errors.password = "Please enter your password";
    }

    if (!this.state.retype) {
      isValid = false;
      errors.retype = "Please enter your confirm password";
    }

    if (
      typeof this.state.password !== "undefined" &&
      typeof this.state.retype !== "undefined"
    ) {
      if (this.state.password !== this.state.retype) {
        isValid = false;
        errors.password = "Password do not match";
      }
    }

    this.setState({
      errors: errors,
    });

    return isValid;
  }

  render() {
    return (
      <Layout>
        <Card title="Register">
          <form onSubmit={this.handleSubmit}>
            <Text
              name="username"
              id="username"
              label="Username"
              value={this.state.username}
              onChange={this.handleChange}
              error={this.state.errors.username}
            />
            <Email
              name="email"
              id="email"
              label="Email"
              value={this.state.email}
              onChange={this.handleChange}
              error={this.state.errors.email}
            />
            <Password
              name="password"
              id="password"
              label="Password"
              value={this.state.password}
              onChange={this.handleChange}
              error={this.state.errors.password}
            />
            <Password
              name="retype"
              id="retype"
              label="Confirm Password"
              value={this.state.retype}
              onChange={this.handleChange}
              error={this.state.errors.retype}
            />
            <ButtonSubmit />
            <ReminderLogin path="/login" />
          </form>
        </Card>
      </Layout>
    );
  }
}

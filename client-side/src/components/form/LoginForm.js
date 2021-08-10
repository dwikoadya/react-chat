import React, { Component } from "react";
import Card from "../screens/Card";
import Email from "../input/Email";
import Password from "../input/Password";
import ButtonSubmit from "../button/ButtonSubmit";
import ReminderRegister from "../screens/ReminderRegister";
import Layout from "../screens/Layout";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
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
      this.props.loginUser({
        email: this.state.email,
        password: this.state.password,
      });
      this.setState({ email: "" });
      this.setState({ password: "" });
    }
  }

  validate() {
    let errors = {};
    let isValid = true;

    if (!this.state.email) {
      isValid = false;
      errors.email = "Please enter your email";
    }

    if (!this.state.password) {
      isValid = false;
      errors.password = "Please enter your password";
    }

    this.setState({
      errors: errors,
    });

    return isValid;
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
              error={this.state.errors.email}
            />
            <Password
              name="password"
              id="password"
              label="Password"
              onChange={this.handleChange}
              value={this.state.password}
              error={this.state.errors.password}
            />
            <ButtonSubmit />
            <ReminderRegister path="/register" />
          </form>
        </Card>
      </Layout>
    );
  }
}

import React, { Component } from "react";
import "../../css/style.css";
import User from "../input/User";
import Message from "../input/Message";
import ButtonSend from "../button/ButtonSend";

export default class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { nama: "", chat: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    const id = Date.now();
    this.props.addChat({
      id,
      nama: this.state.nama,
      chat: this.state.chat,
      sent: true,
    });
    this.setState({ nama: "" });
    this.setState({ chat: "" });
    event.preventDefault();
  }

  render() {
    return (
      <form className="footer" onSubmit={this.handleSubmit}>
        <li className="list-group-item borderless d-flex  align-items-center li">
          <User
            name="nama"
            id="nama"
            placeholder="Your Name"
            onChange={this.handleChange}
            value={this.state.nama}
          />
          <Message
            name="chat"
            placeholder="Write Your Chat Here..."
            change={this.handleChange}
            value={this.state.chat}
          />
          <ButtonSend />
        </li>
      </form>
    );
  }
}

import React, { Component } from 'react';
import '../css/style.css'

export default class ChatFrom extends Component {
    constructor(props) {
        super(props);
        this.state = { nama: '', chat: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const id = Date.now()
        this.props.addChat({ id, nama: this.state.nama, chat: this.state.chat, sent: true })
        this.setState({ chat: '' })
        event.preventDefault();
    }

    render() {
        return (
            <form className="footer" onSubmit={this.handleSubmit}>
                    <li className="list-group-item borderless d-flex  align-items-center li">
                        <div className="speech-bubble col-3">
                            <div className="form-label-group mb-0">
                                <input type="text" name="nama" className="form-control border-2 py-4 bg-light " placeholder="Your Name" required={true}
                                    onChange={this.handleChange} value={this.state.nama} />
                            </div>
                        </div>
                        <div className="speech-bubble col-8">
                            <div className="input-group">
                                <input name="chat" type="text" placeholder="Write Your Chat Here..." aria-describedby="button-addon2" required={true}
                                    className="form-control border-2 py-4 bg-light"
                                    onChange={this.handleChange} value={this.state.chat} />
                            </div>
                        </div>
                        <div className="speech-bubble">
                            <div className="input-group">
                            <button class="msg_send_btn" type="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </li>
            </form>

        );
    }
}

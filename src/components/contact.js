import React, { Component } from "react";
import axios from "axios";

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      action_link: "https://submit-form.com/XTbDsk1A",
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
    axios
      .post(this.state.action_link)
      .then((response) => {
        console.log("Good submission", response);
        this.setState({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log("Error, message did not go through", error);
      });

    event.preventDefault();

    
  }

  render() {
    return (
      <div className="form-wrapper">
        <h2 style={{textAlign: "center"}}>I respond to messages at the end of every work day. Please fill out the form below and I will message you about the details of your next surfboard.</h2>

        <form class="form-inline" action="https://submit-form.com/XTbDsk1A">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required="" />
          <label for="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required="" />
          <label for="email">Phone Number</label>
          <input type="phone" id="phone" name="phone" placeholder="Phone Number" required="" />
          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            required=""
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
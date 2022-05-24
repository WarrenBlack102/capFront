
import axios from "axios";
import React, { Component } from "react";

export default class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            type: "",
            item_img: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }

    handleSubmit(event) {
        axios.post("http://127.0.0.1:5000/surfboard/add", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                name: this.state.name,
                type: this.state.type,
                item_img: this.state.item_img,
            }),
        })
            .then((response) => {
                console.log("Successful Submission", response);
                response.json();
            })
            .then((data) => {
                console.log("Data", data);
                this.setState({
                    name: "",
                    type: "",
                    item_img: "",
                });
            })

            .catch((error) => {
                console.log("Error with Submission", error);
            });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>FORM FOR ADDING SURFBOARDS TO API</h1>
                <div className="add-surfboard-wrapper">
                    <div className="instructions-wrapper">Fill in the surfboard information below</div>
                    <div className="textbox-wrapper">
                        <form
                            className="add-item-form"
                            onSubmit={this.handleSubmit}
                        >
                            <div className="name">
                                <h3>Surfboard Name: </h3>
                                <input
                                    type="text"
                                    name="name"
                                    className="name-input"
                                    placeholder="Surfboard Name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="type">
                                <h3>Style Type: </h3>
                                <input
                                    type="text"
                                    name="type"
                                    className="type-input"
                                    placeholder="Surfboard Style Type"
                                    value={this.state.type}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="image">
                                <h3>Image Url: </h3>
                                <input
                                    type="url"
                                    name="item_img"
                                    className="url-input"
                                    placeholder="Image URL Link"
                                    value={this.state.item_img}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="submit-button">
                                <button type="submit" className="btn">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="right-column"></div>
                </div>
            </div>

        );
    }
}
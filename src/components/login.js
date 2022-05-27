
import axios from "axios";
import React, { Component } from "react";

export default class login extends Component {
    constructor() {
        super();
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
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        
            fetch("http://127.0.0.1:5000/surfboard/add", {
                 method: "POST",
                 headers: { "content-type": "application/json" },
                 body: JSON.stringify({
                     name: this.state.name,
                     type: this.state.type,
                     item_img: this.state.item_img})
                    }
                    ).then(response => response.json())
                    .then(data=> {
                        console.log("",data)
                        this.setState({
                            name: "",
                            type: "",
                            item_img: ""
                        })
                    })
                    .catch((error) => console.log("Error adding surfboard", error));

        event.preventDefault();
    }    
    
    


    render() {
        return (
            <div>
                <div className="add-surfboard-wrapper">
                <h1>FORM FOR ADDING SURFBOARDS TO API</h1>
                    <div className="instructions-wrapper">Fill in the surfboard information below</div>
                    <div className="textbox-wrapper">
                        <form
                            className="add-surfboard-form"
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
                                <h3>Style Type and Discription: </h3>
                                <input
                                    type="text"
                                    name="type"
                                    className="type-input"
                                    placeholder="Style Type and Discription"
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
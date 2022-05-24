import React, { Component } from 'react';
import shaperPicture from "../../static/assets/images/shaper.jpg";
import shaperPicture2 from "../../static/assets/images/surfboardbrands.jpg";
export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="home-wrapper">
                <div className="background-picture">
                <img src={shaperPicture} />
                </div>
                   

                <div className="welcome-section">
                <h2 style={{textAlign: "center"}}>Welcome to Warren's Surf Shop</h2>
                <p style={{textAlign: "center"}}>I am a custom surfboard shaper located in Seaside Park, NJ. I have been making award winning surfboards for the past 10 years and I am taking orders for this surf season. Whether you are new to surfing or an accomplished big wave rider, I can build your next favorite board.</p>

                </div>

                <div className="background-picture">
                <img src={shaperPicture2} />
                </div>
            </div >
        )
    }
}


import React, { Component } from 'react';
import sizingPicture from "../../static/assets/images/sizing3.jpg";
import sizingPicture2 from "../../static/assets/images/sizing2.jpg";
export default class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="about-wrapper">


                <div className="chosing-section">
                    <h2 style={{ textAlign: "center" }}>Chosing the Right Style</h2>
                    <p style={{ textAlign: "center" }}>The choice of surfboard size depends on many different factors, but the two main ones to consider are the ability of a surfer and time in the water. In general, the bigger the board is, the better it will be to catch waves with. Take a look at the tables below to get an idea about the minimum sizes that you should be looking at for your surfboard. 

                        Picking the wrong one may result in less waves, slower progression and reduced fun.

                        A novice surfer will need a larger board than a more skilled surfer.
                        A surfer who only surfs occasionally will need a bigger board than one who surfs regularly.
                        A board that is too small will hold back a surfer's improvement and probably result in frustration. I am very good at what I do and can create the best fit for you.</p>

                </div>

                <div className="top-picture">
                    <img src={sizingPicture} />
                </div>


                <div className="bottom-picture">
                    <img src={sizingPicture2} />
                </div>
            </div >
        )
    }
}

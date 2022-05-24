import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./home";
import Navigation from "./navigation";
import About from "./about";
import Contact from "./contact";
import Surfboard from "./surfboard";
import Login from "./login"


export default class App extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="app">
				<Router>
					<div>
						<Navigation />

						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/surfboard" component={Surfboard} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route path="/login" component={Login} />
							
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}
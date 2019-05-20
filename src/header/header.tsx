import React from "react";
import logo from "../logo.png";
import "./header.css";
const githubIcon = require("../assets/images/github.png");

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<div className="inline">
					<img src={logo} className="logo" alt="logo" />
					<h5>Azog demo</h5>
				</div>
				<div className="github">
					<a href="https://github.com/faygus/azog">
						<img src={githubIcon} />
						Github
					</a>
				</div>
			</div>
		);
	}
}

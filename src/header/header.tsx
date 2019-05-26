import React from "react";
import logo from "../logo.png";
import "./header.css";
import AppMenu from "./menu/menu";
import { History } from "history";
const githubIcon = require("../assets/images/github.png");

interface Props {
	history: History;
}

export default class Header extends React.Component<Props> {
	render() {
		return (
			<div className="header">
				<div className="inline">
					<img src={logo} className="logo" alt="logo" />
					<h5>Azog demo</h5>
				</div>
				<div>
					<AppMenu history={this.props.history}/>
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

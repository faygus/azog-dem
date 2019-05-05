import React from "react";
import logo from '../logo.png';
import './header.css';

export default class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<img src={logo} className="logo" alt="logo" />
				<h1>Azog demo</h1>
			</div>
		);
	}
}

import { createBrowserHistory } from 'history';
import React from 'react';
import './App.css';
import MainLayout from './main-layout/main-layout';

const history = createBrowserHistory();

export default class App extends React.Component {
	private _menu?: HTMLElement;

	private getMenu(): HTMLElement {
		this._menu = document.getElementsByClassName('ant-menu-root')[0] as HTMLElement;
		return this._menu;
	}

	handleScroll = (e: any) => {
		const menu = this._menu ? this._menu : this.getMenu();
		let element = e.target.scrollingElement;
		const distanceFromEnd = (element.scrollHeight - element.scrollTop) - element.clientHeight;
		if (distanceFromEnd <= 69) {
			const delta = 69 - distanceFromEnd;
			menu.style.bottom = `${delta}px`;
		} else {
			menu.style.bottom = '0px';
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	render() {
		return (
			<MainLayout history={history} />
		);
	}
}

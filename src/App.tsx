import { createBrowserHistory } from 'history';
import React from 'react';
import './App.css';
import MainLayout from './main-layout/main-layout';

const history = createBrowserHistory();

export default class App extends React.Component {
	render() {

		return (
			<MainLayout history={history}/>
		);
	}
}

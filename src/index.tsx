/*import React from 'react';
import ReactDOM from 'react-dom';*/
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import * as azog from 'azog';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


const appJSON: azog.IAppJSON = {
	views: {
		1: {
			type: 'labelWF',
			value: {
				text: 'hey world ;)',
				style: {
					color: 1,
					size: 2
				}
			}
		}
	}
}
const parser = new azog.Parser(appJSON);
const component = parser.parse(1);
const root = document.getElementById('root');
if (root) {
	azog.HTMLRenderer.render(component, root);
} else {
	throw new Error('no root element found in dom');
}

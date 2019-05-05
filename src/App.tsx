import React from 'react';
import './App.css';
import LabelWFDemo from './demo/label-wf/label-wf';
import IconWFDemo from './demo/icon-wf/icon-wf';
import Header from './header/header';
import UniColorWFDemo from './demo/uni-color-wf/uni-color-wf';

export default class App extends React.Component {
	render() {
		return (
			<div className="host">
				<Header />
				<div className="demoList">
					<LabelWFDemo />
					<IconWFDemo />
					<UniColorWFDemo />
				</div>
			</div>
			/*<div className="host">
			</div>*/
		);
	}
}

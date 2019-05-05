import React from 'react';
import Demo from '../../demo/demo';
import * as azog from 'azog';

export default class UniColorWFDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'uniColorWF',
				value: {
					color: 1
				}
			}
		}
	}

	render() {
		return (
			<Demo azogApp={this._azogApp} title="uni color"/>
		);
	}
}

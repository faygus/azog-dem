import React from 'react';
import * as azog from 'azog';
import Demo from '../demo';

export default class LabelWFDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
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
	};

	render() {
		return (
			<Demo azogApp={this._azogApp} title="label (wireframe)"/>
		);
	}
}

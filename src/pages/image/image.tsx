import React from 'react';
import Demo from '../../demo/demo';
import * as azog from 'azog';

export default class ImageDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'image',
				value: {
					src: 'nadal'
				}
			}
		}
	};

	render() {
		return (
			<Demo azogApp={this._azogApp} title="Image" />
		);
	}
}

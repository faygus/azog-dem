import React from 'react';
import * as azog from 'azog';
import Demo from '../../../demo/demo';

export default class IconWFDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'iconWF',
				value: {
					iconName: 'calendar',
					style: {
						color: 1,
						size: 2
					}
				}
			}
		}
	}

	render() {
		return (
			<Demo azogApp={this._azogApp} title="icon"/>
		);
	}
}

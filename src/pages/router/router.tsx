import React from 'react';
import Demo from '../../demo/demo';
import * as azog from 'azog';

export default class RouterDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'router',
				value: {
					activeRoute: {
						value: {
							propertyName: 'activatedRoute'
						}
					},
					routes: {
						'route1': {
							id: 2,
						},
						'route2': {
							id: 3
						},
						'route3': {
							id: 4
						}
					}
				}
			},
			2: {
				type: 'uniColorWF',
				value: {
					color: 1
				}
			},
			3: {
				type: 'iconWF',
				value: {
					iconName: 'calendar',
					style: {
						color: 2,
						size: 1
					}
				}
			},
			4: {
				type: 'labelWF',
				value: {
					text: 'Hey world',
					style: {
						color: 1,
						size: 2
					}
				}
			},
		},
		viewModelInterfaces: {
			1: {
				properties: {
					activatedRoute: 'string'
				}
			}
		},
		mockViewModels: {
			1: {
				activatedRoute: {
					loop: true,
					values: [
						{
							timeout: 0,
							value: 'route1'
						},
						{
							timeout: 1000,
							value: 'route2'
						},
						{
							timeout: 2000,
							value: 'route3'
						},
					]
				}
			}
		}
	}

	render() {
		return (
			<Demo azogApp={this._azogApp} title="router" />
		);
	}
}

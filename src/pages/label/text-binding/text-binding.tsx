import React from 'react';
import * as azog from 'azog';
import Demo from '../../../demo/demo';

export default class LabelTextBindingDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'labelWF',
				value: {
					text: {
						value: {
							propertyName: 'text'
						}
					},
					style: {
						color: 2,
						size: 1
					}
				}
			}
		},
		viewModelInterfaces: {
			1: {
				properties: {
					text: 'string'
				}
			}
		},
		mockViewModels: {
			1: {
				text: {
					loop: true,
					values: [
						{
							timeout: 0,
							value: 'Hey'
						},
						{
							timeout: 1000,
							value: 'world'
						},
					]
				}
			}
		}
	};

	render() {
		return (
			<Demo azogApp={this._azogApp} title="label with text binding"/>
		);
	}
}

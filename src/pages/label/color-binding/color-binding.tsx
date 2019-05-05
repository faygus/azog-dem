import React from 'react';
import * as azog from 'azog';
import Demo from '../../../demo/demo';

export default class LabelColorBindingDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'labelWF',
				value: {
					text: 'Hey world',
					style: {
						color: {
							value: {
								propertyName: 'color'
							}
						},
						size: 2
					}
				}
			}
		},
		viewModelInterfaces: {
			1: {
				properties: {
					color: 'number'
				}
			}
		},
		mockViewModels: {
			1: {
				color: {
					loop: true,
					values: [
						{
							timeout: 0,
							value: 0
						},
						{
							timeout: 1000,
							value: 1
						},
						{
							timeout: 2000,
							value: 2
						},
					]
				}
			}
		}
	};

	render() {
		return (
			<Demo azogApp={this._azogApp} title="label with color binding"/>
		);
	}
}

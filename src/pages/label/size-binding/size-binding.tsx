import React from 'react';
import * as azog from 'azog';
import Demo from '../../../demo/demo';

export default class LabelSizeBindingDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'labelWF',
				value: {
					text: 'Hey world',
					style: {
						color: 1,
						size: {
							value: {
								propertyName: 'size'
							}
						},
					}
				}
			}
		},
		viewModelInterfaces: {
			1: {
				properties: {
					size: 'number'
				}
			}
		},
		mockViewModels: {
			1: {
				size: {
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
			<Demo azogApp={this._azogApp} title="label with size binding"/>
		);
	}
}

import React from 'react';
import Demo from '../../demo/demo';
import * as azog from 'azog';

export default class IfDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'if',
				value: {
					condition: {
						value: {
							propertyName: 'condition'
						}
					},
					template: {
						componentId: 2
					}
				}
			},
			2: {
				type: 'uniColorWF',
				value: {
					color: 2
				}
			}
		},
		viewModelInterfaces: {
			1: {
				properties: {
					condition: 'boolean'
				}
			}
		},
		mockViewModels: {
			1: {
				condition: {
					loop: true,
					values: [
						{
							timeout: 0,
							value: true
						},
						{
							timeout: 1000,
							value: false
						},
					]
				}
			}
		}
	};

	render() {
		return (
			<Demo azogApp={this._azogApp} title="If" />
		);
	}
}

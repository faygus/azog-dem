import React from 'react';
import Demo from '../../demo/demo';
import * as azog from 'azog';

export default class ForLoopDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'forLoop',
				value: {
					array: {
						value: {
							propertyName: 'data'
						}
					},
					template: {
						componentId: 2,
						inputs: {
							color: {
								value: {
									propertyName: 'elementInArray'
								}
							}
						}
					},
					container: {
						direction: 'column',
						margin: 10,
						size: 60
					}
				}
			},
			2: {
				type: 'uniColorWF',
				value: {
					color: {
						value: {
							propertyName: 'color'
						}
					}
				}
			}
		},
		viewModelInterfaces: {
			1: {
				properties: {
					data: 'number' // TODO
				}
			},
			2: {
				properties: {},
				inputs: {
					color: 'number'
				},
			}
		},
		mockViewModels: {
			1: {
				data: {
					loop: true,
					values: [
						{
							timeout: 0,
							value: [0, 1, 2, 1]
						},
						{
							timeout: 1000,
							value: [1, 2, 0]
						},
						{
							timeout: 2000,
							value: [2, 1]
						},
					]
				}
			}
		}
	};

	render() {
		return (
			<Demo azogApp={this._azogApp} title="For loop" />
		);
	}
}

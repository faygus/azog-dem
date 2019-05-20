import React from 'react';
import Demo from '../../demo/demo';
import * as azog from 'azog';

export default class SrcBindindDemo extends React.Component {

	private _azogApp: azog.IAppJSON = {
		views: {
			1: {
				type: 'image',
				value: {
					src: {
						value: {
							propertyName: 'name'
						}
					}
				}
			}
		},
		viewModelInterfaces: {
			1: {
				properties: {
					name: 'string'
				}
			}
		},
		mockViewModels: {
			1: {
				name: {
					loop: true,
					values: [
						{
							timeout: 0,
							value: 'nadal'
						},
						{
							timeout: 1000,
							value: 'federer'
						},
					]
				}
			}
		}
	};

	render() {
		return (
			<Demo azogApp={this._azogApp} title="Image with source binding" />
		);
	}
}

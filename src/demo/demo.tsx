import React from 'react';
import * as azog from 'azog';
import ReactJson from 'react-json-view';
import './demo.css';
import Card from '../card/card';

interface Props {
	azogApp: azog.IAppJSON;
	title: string;
}

export default class Demo extends React.Component<Props> {
	private _anchorRef: React.RefObject<HTMLDivElement> = React.createRef();

	componentDidMount() {
		const node = this._anchorRef.current;
		if (!node) {
			throw new Error('can not render label');
		}
		showAzogComponent(this.props.azogApp, node);
	}

	render() {
		const title = capitalize(this.props.title);
		return (
			<Card title={title}>
				<div className="content">
					<div className="component" ref={this._anchorRef}></div>
					<div className="json-viewer">
						<ReactJson src={this.props.azogApp} enableClipboard={false} displayDataTypes={false} displayObjectSize={false} />
					</div>
				</div>
			</Card>
		);
	}
}

const showAzogComponent = (azogApp: azog.IAppJSON, element: HTMLElement) => {
	const parser = new azog.Parser(azogApp);
	const component = parser.parse(1);
	azog.HTMLRenderer.render(component, element);
}

function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

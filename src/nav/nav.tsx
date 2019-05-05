import React from 'react';
import { Nav } from 'react-bootstrap';
import { History } from 'history';

interface Props {
	history: History<any>;
}

export default class AppNav extends React.Component<Props> {
	onSelect(selectedKey: any) {
		this.props.history.push('/' + selectedKey);
	}

	render() {
		return (
			<Nav defaultActiveKey="home" className="flex-column"
				onSelect={(selectedKey: any) => this.onSelect(selectedKey)}>
				<Nav.Link eventKey="">Label</Nav.Link>
				<Nav.Link eventKey="icon">Icon</Nav.Link>
				<Nav.Link eventKey="uni-color">Uni color</Nav.Link>
				{/*<Nav.Link eventKey="disabled" disabled>
					Disabled
				</Nav.Link>*/}
			</Nav>
		);
	}
}

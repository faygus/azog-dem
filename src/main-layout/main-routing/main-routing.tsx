import React from 'react';
import { Router, Route } from 'react-router-dom';
import { History } from 'history';
import ExamplesPage from '../../examples-page/example-pages';
import ComponentsPage from '../../components-page/components-page';

interface Props {
	history: History;
}

export default class MainRouting extends React.Component<Props> {
	render() {
		return (
			<Router history={this.props.history}>
				<Route path="/examples" component={ExamplesPage} />
				<Route path="/components" component={ComponentsPage} />
			</Router>
		);
	}
}

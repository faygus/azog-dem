import React from 'react';
import { Router, Route } from 'react-router-dom';
import { History } from 'history';
import { ROUTES } from '../routing';
import LabelPage from '../pages/label/label-page';
import IconPage from '../pages/icon/icon-page';
import UniColorPage from '../pages/uni-color/uni-color-page';
import RouterPage from '../pages/router/router-page';
import IfPage from '../pages/if/if-page';
import { CONFIG } from '../config';
import ForLoopPage from '../pages/for-loop/for-loop-page';
import LayersPage from '../pages/layers/layers-page';
import LayoutPage from '../pages/layout/layout-page';
import ImagePage from '../pages/image/image-page';

interface Props {
	history: History;
}

export default class PageHolder extends React.Component<Props> {

	render() {
		const items = []

		for (const route in ROUTES) {
			const name = (ROUTES as any)[route];
			const component = componentsRouteMap[name];
			if (name && component) {
				const path = (CONFIG.prefixInUrl ? `/${CONFIG.prefixInUrl}` : '') + `/${name}`;
				items.push(
					<Route key={path} path={path} component={component} />
				);
			}
		}

		const rootPath = `/${CONFIG.prefixInUrl}`;
		return (
			<Router history={this.props.history}>
				<Route path={rootPath} exact component={LabelPage} />
				{items}
			</Router>
		);
	}
}

const componentsRouteMap = {
	[ROUTES.layers]: LayersPage,
	[ROUTES.labelWF]: LabelPage,
	[ROUTES.iconWF]: IconPage,
	[ROUTES.uniColorWF]: UniColorPage,
	[ROUTES.router]: RouterPage,
	[ROUTES.if]: IfPage,
	[ROUTES.forLoop]: ForLoopPage,
	[ROUTES.layout]: LayoutPage,
	[ROUTES.image]: ImagePage,
}

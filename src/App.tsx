import React from 'react';
import './App.css';
import Header from './header/header'; 
import AppNav from './nav/nav';
import { Container, Row, Col } from 'react-bootstrap';
import { Router, Route } from 'react-router-dom';
import LabelPage from './pages/label/label-page';
import IconPage from './pages/icon/icon-page';
import UniColorPage from './pages/uni-color/uni-color-page';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default class App extends React.Component {
	render() {

		return (
			<div>
				<div className="header-wrapper">
					<Header />
				</div>
				<div className="page-content">
					<Container>
						<Row>
							<Col xs={2}>
								<AppNav history={history} />
							</Col>
							<Col>
								<Router history={history}>
									<Route path="/" exact component={LabelPage} />
									<Route path="/icon/" component={IconPage} />
									<Route path="/uni-color" component={UniColorPage} />
								</Router>
							</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

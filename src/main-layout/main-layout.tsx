import { Layout } from 'antd';
import { History } from 'history';
import React from 'react';
import Header from '../header/header';
import PageHolder from '../page-holder/page-holder';
import Sider from '../sider/sider';
import './main-layout.css';
const { Footer } = Layout;

interface Props {
	history: History;
}

export default class MainLayout extends React.Component<Props> {
	render() {
		return (
			<div className="az-layout">
				<Header>
					<div className="logo" />
				</Header>
				<Sider history={this.props.history} />
				<div className="page-area">
					<PageHolder history={this.props.history} />
				</div>
				<Footer style={{ textAlign: 'center' }}>Azog ©2018 Created by Faygus</Footer>
			</div>
		);
	}
}
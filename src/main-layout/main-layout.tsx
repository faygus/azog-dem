import { Layout } from 'antd';
import React from 'react';
import Header from '../header/header';
import Sider from '../sider/sider';
import './main-layout.css';
import { History } from 'history';
import PageHolder from '../page-holder/page-holder';
const { Content, Footer } = Layout;

interface Props {
	history: History;
}

export default class MainLayout extends React.Component<Props> {
	render() {
		return (
			<Layout className="layout">
				<Header>
					<div className="logo" />
				</Header>
				<Content>
					<div className="row main-content">
						<Sider history={this.props.history} />
						<div className="page-area">
							<PageHolder history={this.props.history}/>
						</div>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>Azog ©2018 Created by Faygus</Footer>
			</Layout>
		);
	}
}
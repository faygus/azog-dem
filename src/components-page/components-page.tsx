import React from 'react';
import Sider from '../sider/sider';
import PageHolder from '../page-holder/page-holder';
import history from '../history';

const ComponentsPage: React.FunctionComponent = () => {
	return (
		<div>
			<Sider history={history} />
			<div className="page-area">
				<PageHolder history={history} />
			</div>
		</div>
	);
}

export default ComponentsPage;

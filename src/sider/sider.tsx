import React from 'react';
import { Menu } from 'antd';
import { History, Location } from 'history';
import { ROUTES } from '../routing';
import { MenuItem } from './menu-item';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface Props {
	history: History<any>;
}

interface State {
	selectedItem: MenuItem;
}

export default class Sider extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = { selectedItem: MenuItem.LABEL_WF };
	}

	componentDidMount() {
		this.handleRoute(this.props.history.location);
		this.props.history.listen((location) => {
			this.handleRoute(location);
		});
	}

	private handleRoute(location: Location<any>) {
		for (const item in menuItemUrlMap) {
			const path = (menuItemUrlMap as any)[item];
			if (`/${path}` === location.pathname) {
				this.setState({
					selectedItem: Number(item)
				});
				break;
			}
		}
	}

	handleClick = (e: any) => {
		const key = e.key;
		const k: MenuItem = Number(key);
		const url = menuItemUrlMap[k];
		this.props.history.push('/' + url);
	};

	render() {
		return (
			<Menu
				onClick={this.handleClick}
				style={{ width: 256 }}
				selectedKeys={[this.state.selectedItem + '']}
				defaultSelectedKeys={[MenuItem.LABEL_WF + '']}
				defaultOpenKeys={['sub1']}
				mode="inline"
			>
				<SubMenu
					key="sub1"
					title="Components"
				>
					<MenuItemGroup key="g1" title="Layout">
						<Menu.Item key={MenuItem.LAYERS}>Layers</Menu.Item>
						<Menu.Item key={MenuItem.LAYOUT}>Vertical/horizontal layout</Menu.Item>
					</MenuItemGroup>
					<MenuItemGroup key="g2" title="Wireframe">
						<Menu.Item key={MenuItem.LABEL_WF}>Label</Menu.Item>
						<Menu.Item key={MenuItem.ICON_WF}>Icon</Menu.Item>
						<Menu.Item key={MenuItem.UNI_COLOR_WF}>Uni color</Menu.Item>
					</MenuItemGroup>
					<MenuItemGroup key="g3" title="View logic">
						<Menu.Item key={MenuItem.ROUTER}>Router</Menu.Item>
						<Menu.Item key={MenuItem.IF}>If</Menu.Item>
					</MenuItemGroup>
				</SubMenu>
			</Menu>
		);
	}
}

const menuItemUrlMap = {
	[MenuItem.LAYERS]: ROUTES.layers,
	[MenuItem.LAYOUT]: ROUTES.layout,
	[MenuItem.LABEL_WF]: ROUTES.labelWF,
	[MenuItem.ICON_WF]: ROUTES.iconWF,
	[MenuItem.UNI_COLOR_WF]: ROUTES.uniColorWF,
	[MenuItem.ROUTER]: ROUTES.router,
	[MenuItem.IF]: ROUTES.if
};

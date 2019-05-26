import React from "react";
import { Menu, Icon } from 'antd';
import { History } from 'history';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface Props {
	history: History;
}

export default class AppMenu extends React.Component<Props> {
  state = {
    current: 'components',
  };

  handleClick = (e: any) => {
		const key = e.key;
    this.setState({
      current: key
		});
		const url = `/${key}`;
		this.props.history.push(url);
		// TODO routing
  };

  render() {
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
        <Menu.Item key="components">
          {/*<Icon type="mail" />*/}
					Components
        </Menu.Item>
				<Menu.Item key="examples">
					Examples
        </Menu.Item>
      </Menu>
    );
  }
}

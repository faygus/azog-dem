import React from 'react';
import './card.css';

type Props = {
	title: string;
}

export default class Card extends React.Component<Props> {

	render() {
		const { title } = this.props;
		return (
			<div className="card">
				<div className="card-header">
					{title}
				</div>
				<div className="card-content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

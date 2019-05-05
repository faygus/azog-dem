import React from 'react';
import './card.css';

type Props = {
	title: string;
}

export default class Card extends React.Component<Props> {

	render() {
		const { title } = this.props;
		return (
			<div className="azog-card">
				<div className="azog-card-header">
					{title}
				</div>
				<div className="azog-card-content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

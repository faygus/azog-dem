import React from 'react';
import './App.css';
import logo from './logo.png';

const App: React.FC = () => {
	return (
		<div className="host">
			<div className="header">
				<img src={logo} className="logo" alt="logo" />
				<h1>Azog demo</h1>
			</div>
		</div>
	);
}

export default App;

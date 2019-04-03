import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h2>Webauth with JWT Test app</h2>

				<Route path="/register" component={Register} />
			</div>
		);
	}
}

export default App;

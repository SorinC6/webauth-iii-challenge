import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h2>Webauth with JWT Test app</h2>

				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/users" component={Users} />
			</div>
		);
	}
}

export default App;

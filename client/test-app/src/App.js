import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Users from './components/Users';

class App extends Component {
	render() {
		//const loggedIn = localStorage.getItem('token');
		return (
			<div className="App">
				<h2>Webauth with JWT Test app</h2>
				<Route
					exact
					path="/users"
					render={(props) =>
						localStorage.getItem('token') ? <Users {...props} /> : <Redirect to="/login" />}
				/>

				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import axiosWithAuth from '../axios/axios';
import User from './User';

class Users extends Component {
	state = {
		users: []
	};

	componentDidMount() {
		axiosWithAuth()
			.get('http://localhost:4000/api/users')
			.then((users) => {
				console.log(users.data);
				this.setState({
					users: users.data
				});
			})
			.catch((err) => {
				console.log('rrr');
				console.log(err);
			});
	}

	onLogout = () => {
		localStorage.clear();
		this.props.history.push('/login');
	};

	render() {
		return (
			<div>
				<h2>List of Users</h2>
				<button onClick={this.onLogout}>Logout</button>
				{this.state.users.map((user) => <User key={user.id} username={user.username} departament={user.departament}/>)}
			</div>
		);
	}
}

export default withRouter(Users);

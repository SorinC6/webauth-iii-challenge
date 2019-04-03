import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
//axios.defaults.withCredentials = true;

class Login extends Component {
	state = {
		username: '',
		password: ''
	};

	onLogin = (e) => {
		e.preventDefault();
		const userData = {
			username: this.state.username,
			password: this.state.password
		};
		axios
			.post('http://localhost:4000/api/login', userData)
			.then((res) => {
				console.log(res.data);
				localStorage.setItem('token', res.data.token);
				this.props.history.push('/users');
				//localStorage.setItem('token', res.data.token);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	onUserChange = (e) => {
		this.setState({
			username: e.target.value
		});
	};

	onPasswordChange = (e) => {
		this.setState({
			password: e.target.value
		});
	};

	render() {
		return (
			<div>
				<h1 style={{ textAlign: 'center' }}>LOGIN</h1>

				<Form onSubmit={this.onLogin}>
					<input
						placeholder="username"
						onChange={this.onUserChange}
						value={this.state.username}
						name="username"
					/>
					<input
						placeholder="password"
						onChange={this.onPasswordChange}
						value={this.state.password}
						name="password"
					/>
					<button type="submit">Login</button>
				</Form>
				<p style={{ textAlign: 'center' }}>
					<Link to="/register">Don't have a account?</Link>
				</p>
			</div>
		);
	}
}

export default withRouter(Login);

const Form = styled.form`
	display: flex;
	flex-direction: column;
	max-width: 400px;
	margin: 0 auto;
	align-items: center;
	margin-top: 100px;

	input {
		padding: 20px 50px;
		outline: none;
		font-size: 16px;
	}
	button {
		padding: 10px;
		margin: 5px;
		width: 40%;
		border-radius: 5px;
		outline: none;
	}
`;

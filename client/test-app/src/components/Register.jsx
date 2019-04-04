import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
//axios.defaults.withCredentials = true;

class Register extends Component {
	state = {
		username: '',
		password: '',
		departament: ''
	};

	onRegister = (e) => {
		e.preventDefault();
		const userData = {
			username: this.state.username,
			password: this.state.password,
			departament: this.state.departament
		};
		axios
			.post('http://localhost:4000/api/register', userData)
			.then((res) => {
				console.log(res.data);
				this.props.history.push('/login');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	onInputChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	// onPasswordChange = (e) => {
	// 	this.setState({
	// 		password: e.target.value
	// 	});
	// };

	render() {
		return (
			<div>
				<h1 style={{ textAlign: 'center' }}>REGISTER</h1>
				<Form onSubmit={this.onRegister}>
					<input
						placeholder="username"
						onChange={this.onInputChange}
						value={this.state.username}
						name="username"
					/>
					<input
						placeholder="password"
						onChange={this.onInputChange}
						value={this.state.password}
						name="password"
					/>
					<input
						placeholder="departament"
						onChange={this.onInputChange}
						value={this.state.departament}
						name="departament"
					/>
					<button type="submit">Register</button>
				</Form>
				<p style={{ textAlign: 'center' }}>
					<Link to="/login">Already have a account?</Link>
				</p>
			</div>
		);
	}
}

export default withRouter(Register);

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

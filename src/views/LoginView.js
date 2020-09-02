//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import Login from 'components/Login';
//Redux
import { authOperations } from 'redux/auth';

class LoginView extends Component {
	state = {
		email: '',
		password: '',
	};

	onHandleChange = e => this.setState({ [e.target.name]: e.target.value });

	onHandleSubmit = e => {
		e.preventDefault();

		this.props.onLogin({ ...this.state });
		this.setState({ email: '', password: '' });
	};

	render() {
		return (
			<Login
				{...this.state}
				handleChange={this.onHandleChange}
				handleSubmit={this.onHandleSubmit}
			/>
		);
	}
}

const mapDispatchToProps = {
	onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);

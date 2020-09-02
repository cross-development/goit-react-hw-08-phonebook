//Core
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import Register from 'components/Register';
//Redux
import { authOperations } from 'redux/auth';

class RegisterView extends Component {
	state = {
		name: '',
		email: '',
		password: '',
	};

	onHandleChange = e => this.setState({ [e.target.name]: e.target.value });

	onHandleSubmit = e => {
		e.preventDefault();

		this.props.onRegister({ ...this.state });
		this.setState({ name: '', email: '', password: '' });
	};

	render() {
		return (
			<Register
				{...this.state}
				handleChange={this.onHandleChange}
				handleSubmit={this.onHandleSubmit}
			/>
		);
	}
}

const mapDispatchToProps = {
	onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);

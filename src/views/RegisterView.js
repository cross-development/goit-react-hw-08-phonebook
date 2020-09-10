//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Components
import Error from 'components/Error';
import Register from 'components/Register';
//Redux
import { authOperations, authSelectors } from 'redux/auth';

class RegisterView extends Component {
	static propTypes = {
		onRegister: PropTypes.func.isRequired,
		hasError: PropTypes.object,
	};

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
		const { hasError } = this.props;
		const isErrorTypeRegister = hasError && hasError.config.url.includes('register');

		return (
			<>
				<Register
					{...this.state}
					handleChange={this.onHandleChange}
					handleSubmit={this.onHandleSubmit}
				/>

				{isErrorTypeRegister && <Error message="User with this email already exists" />}
			</>
		);
	}
}

const mapStateToProps = state => ({
	hasError: authSelectors.hasError(state),
});

const mapDispatchToProps = {
	onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterView);

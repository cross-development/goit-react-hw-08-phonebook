//Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//Components
import Error from 'components/Error';
import Login from 'components/Login';
//Redux
import { authOperations, authSelectors } from 'redux/auth';

class LoginView extends Component {
	static propTypes = {
		onLogin: PropTypes.func.isRequired,
		hasError: PropTypes.object,
	};

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
			<>
				{this.props.hasError && <Error message="User with this email address not found" />}

				<Login
					{...this.state}
					handleChange={this.onHandleChange}
					handleSubmit={this.onHandleSubmit}
				/>
			</>
		);
	}
}

const mapStateToProps = state => ({
	hasError: authSelectors.hasError(state),
});

const mapDispatchToProps = {
	onLogin: authOperations.logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
